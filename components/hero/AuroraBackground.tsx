"use client";

import { useEffect, useRef } from "react";

const vertexSource = `
  attribute vec2 a_position;
  void main() { gl_Position = vec4(a_position, 0.0, 1.0); }
`;

// An analytically shaded sphere: one triangle, no meshes, textures, or extra passes.
const fragmentSource = `
  precision mediump float;
  uniform vec2 u_resolution;
  uniform float u_time;

  void main() {
    vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);
    float radius = 0.84;
    float radialDistance = length(p);
    float aa = 2.0 / min(u_resolution.x, u_resolution.y);
    float mask = 1.0 - smoothstep(radius - aa, radius + aa, radialDistance);
    if (mask < 0.001) { gl_FragColor = vec4(0.0); return; }

    vec2 xy = p / radius;
    vec3 n = vec3(xy, sqrt(max(0.0, 1.0 - dot(xy, xy))));
    float t = u_time * 0.16;
    float flow = n.x * 2.4 + n.y * 2.1 + sin(n.y * 3.8 - t) * 0.7;
    float sweep = sin(flow + t + n.z * 1.8) * 0.5 + 0.5;
    vec3 mint = vec3(0.10, 0.94, 0.73);
    vec3 blue = vec3(0.17, 0.43, 0.95);
    vec3 violet = vec3(0.59, 0.29, 0.98);
    vec3 pink = vec3(1.0, 0.43, 0.71);
    vec3 color = mix(blue, mint, smoothstep(0.12, 0.9, sweep));
    color = mix(color, violet, smoothstep(-0.3, 0.8, n.x - n.y * 0.45));
    float ribbon = sin(n.y * 4.2 + n.x * 2.0 + sin(n.z * 3.0 + t) - t);
    color = mix(color, pink, smoothstep(0.58, 1.0, ribbon) * 0.76);

    float light = max(dot(n, normalize(vec3(-0.5, 0.8, 1.2))), 0.0);
    color *= 0.24 + light * 0.7;
    float rim = pow(1.0 - n.z, 3.2);
    color += mix(mint, pink, n.x * 0.5 + 0.5) * rim * 0.58;
    float sheen = pow(max(dot(n, normalize(vec3(-0.45, 0.6, 1.6))), 0.0), 36.0);
    color += vec3(0.7, 0.94, 1.0) * sheen * 0.38;
    gl_FragColor = vec4(color, mask);
  }
`;

function createRenderer(canvas: HTMLCanvasElement) {
  const gl = canvas.getContext("webgl", {
    alpha: true,
    antialias: false,
    depth: false,
    stencil: false,
    premultipliedAlpha: false,
    powerPreference: "low-power",
  });
  if (!gl) return null;

  const compile = (type: number, source: string) => {
    const shader = gl.createShader(type);
    if (!shader) return null;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  };

  const vertex = compile(gl.VERTEX_SHADER, vertexSource);
  const fragment = compile(gl.FRAGMENT_SHADER, fragmentSource);
  const program = gl.createProgram();
  if (!vertex || !fragment || !program) {
    if (vertex) gl.deleteShader(vertex);
    if (fragment) gl.deleteShader(fragment);
    if (program) gl.deleteProgram(program);
    return null;
  }

  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);
  gl.deleteShader(vertex);
  gl.deleteShader(fragment);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    gl.deleteProgram(program);
    return null;
  }

  const buffer = gl.createBuffer();
  if (!buffer) {
    gl.deleteProgram(program);
    return null;
  }
  gl.useProgram(program);
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const position = gl.getAttribLocation(program, "a_position");
  gl.enableVertexAttribArray(position);
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
  const resolution = gl.getUniformLocation(program, "u_resolution");
  const time = gl.getUniformLocation(program, "u_time");

  return {
    draw(elapsed: number) {
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(resolution, canvas.width, canvas.height);
      gl.uniform1f(time, elapsed);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    },
    dispose() {
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
    },
  };
}

export function AuroraBackground() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    const canvas = canvasRef.current;
    if (!scene || !canvas) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const bounds = scene.getBoundingClientRect();
    let visible = bounds.bottom > 0 && bounds.top < window.innerHeight;
    let lost = false;
    let frame = 0;
    let lastTime: number | null = null;
    let nextPaintAt = 0;
    let elapsed = 0;
    let renderer: ReturnType<typeof createRenderer> = null;

    const initialize = () => {
      try {
        renderer = createRenderer(canvas);
      } catch {
        // The CSS orb remains visible when WebGL is blocked or unavailable.
        renderer = null;
      }
    };

    const paint = () => {
      if (!renderer || lost || !visible || document.hidden) return;
      renderer.draw(elapsed);
      canvas.dataset.ready = "true";
    };

    const tick = (now: number) => {
      if (now >= nextPaintAt) {
        if (lastTime !== null) elapsed += Math.min((now - lastTime) / 1000, 0.1);
        const interval = 1000 / 30;
        nextPaintAt = now + interval - ((now - nextPaintAt) % interval);
        lastTime = now;
        paint();
      }
      frame = requestAnimationFrame(tick);
    };

    const sync = () => {
      cancelAnimationFrame(frame);
      lastTime = null;
      nextPaintAt = 0;
      if (!renderer || lost || !visible || document.hidden) return;
      paint();
      if (!reducedMotion.matches) frame = requestAnimationFrame(tick);
    };

    const resize = () => {
      const size = Math.max(1, Math.min(960, Math.round(canvas.clientWidth * Math.min(window.devicePixelRatio || 1, 1.25))));
      if (canvas.width !== size || canvas.height !== size) {
        canvas.width = size;
        canvas.height = size;
      }
      paint();
    };

    const onContextLost = (event: Event) => {
      event.preventDefault();
      lost = true;
      cancelAnimationFrame(frame);
      delete canvas.dataset.ready;
    };
    const onContextRestored = () => {
      renderer?.dispose();
      lost = false;
      initialize();
      resize();
      sync();
    };

    initialize();
    resize();
    sync();
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    const sizes = new ResizeObserver(resize);
    intersection.observe(scene);
    sizes.observe(canvas);
    document.addEventListener("visibilitychange", sync);
    reducedMotion.addEventListener("change", sync);
    canvas.addEventListener("webglcontextlost", onContextLost);
    canvas.addEventListener("webglcontextrestored", onContextRestored);

    return () => {
      cancelAnimationFrame(frame);
      intersection.disconnect();
      sizes.disconnect();
      document.removeEventListener("visibilitychange", sync);
      reducedMotion.removeEventListener("change", sync);
      canvas.removeEventListener("webglcontextlost", onContextLost);
      canvas.removeEventListener("webglcontextrestored", onContextRestored);
      delete canvas.dataset.ready;
      renderer?.dispose();
    };
  }, []);

  return (
    <div ref={sceneRef} className="aurora-scene" aria-hidden="true">
      <div className="aurora-halo" />
      <div className="aurora-orb">
        <div className="aurora-orb-fallback" />
        <canvas ref={canvasRef} className="aurora-canvas" />
      </div>
      <div className="aurora-scrim" />
    </div>
  );
}
