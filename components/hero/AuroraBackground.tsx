"use client";

import { useEffect, useRef } from "react";

const vertexShader = `
  attribute vec2 a_position;

  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const fragmentShader = `
  precision mediump float;

  uniform vec2 u_resolution;
  uniform float u_progress;

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy - 0.5;
    uv.x *= u_resolution.x / u_resolution.y;

    float radius = length(uv);
    float angle = atan(uv.y, uv.x);
    float direction = u_progress <= 0.5
      ? u_progress * 2.0
      : (1.0 - u_progress) * 2.0;

    float pink = 0.5 + 0.5 * cos(angle - direction * 2.15 - 1.0);
    float cyan = 0.5 + 0.5 * cos(angle - direction * 1.8 + 1.55);
    float orange = pow(0.5 + 0.5 * cos(angle + direction * 1.45 + 2.75), 2.0);

    float ring = exp(-pow((radius - 0.3) / 0.18, 2.0));
    float outerGlow = exp(-pow((radius - 0.34) / 0.29, 2.0));
    float breath = 0.92 + sin(direction * 6.2831853) * 0.08;

    vec3 color = vec3(0.12, 0.035, 0.2)
      + vec3(0.72, 0.02, 0.34) * pink
      + vec3(0.0, 0.38, 0.78) * cyan
      + vec3(0.76, 0.2, 0.015) * orange;

    float intensity = (ring * 0.42 + outerGlow * 0.2) * breath;
    color *= intensity;
    float alpha = clamp(intensity * 0.48, 0.0, 0.34);

    gl_FragColor = vec4(color, alpha);
  }
`;

function createBloomRenderer(canvas: HTMLCanvasElement) {
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

  const vertex = compile(gl.VERTEX_SHADER, vertexShader);
  const fragment = compile(gl.FRAGMENT_SHADER, fragmentShader);
  const program = gl.createProgram();
  if (!vertex || !fragment || !program) return null;

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
  if (!buffer) return null;
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
    gl.STATIC_DRAW,
  );

  gl.useProgram(program);
  const position = gl.getAttribLocation(program, "a_position");
  const resolution = gl.getUniformLocation(program, "u_resolution");
  const progress = gl.getUniformLocation(program, "u_progress");
  gl.enableVertexAttribArray(position);
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

  return {
    draw(value: number) {
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform2f(resolution, canvas.width, canvas.height);
      gl.uniform1f(progress, value);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    },
    dispose() {
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
    },
  };
}

export function AuroraBackground() {
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!stage || !canvas || !video) return;

    canvas.width = 192;
    canvas.height = 192;
    const renderer = createBloomRenderer(canvas);
    if (!renderer) return;

    const playbackRate = 40 / 120;
    const applyPlaybackRate = () => {
      video.defaultPlaybackRate = playbackRate;
      video.playbackRate = playbackRate;
    };

    let frame = 0;
    let visible = true;

    const render = () => {
      const duration = Number.isFinite(video.duration) && video.duration > 0 ? video.duration : 3.1;
      renderer.draw((video.currentTime % duration) / duration);
      frame = requestAnimationFrame(render);
    };

    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      cancelAnimationFrame(frame);
      if (visible) frame = requestAnimationFrame(render);
    });

    intersection.observe(stage);
    applyPlaybackRate();
    video.addEventListener("loadedmetadata", applyPlaybackRate);
    video.addEventListener("play", applyPlaybackRate);
    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      intersection.disconnect();
      video.removeEventListener("loadedmetadata", applyPlaybackRate);
      video.removeEventListener("play", applyPlaybackRate);
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={stageRef} className="hero-orb-stage" aria-hidden="true">
      <canvas ref={canvasRef} className="hero-orb-bloom" />
      <video
        ref={videoRef}
        className="hero-orb-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/hero/me-apple-orb-poster.webp"
        disablePictureInPicture
      >
        <source src="/hero/me-apple-orb-pingpong.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
