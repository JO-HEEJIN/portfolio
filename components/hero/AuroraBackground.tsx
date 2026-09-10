"use client";

import { useEffect, useRef } from "react";

const vertexSource = `
  attribute vec3 a_position;
  attribute vec3 a_normal;
  uniform float u_time;
  uniform vec2 u_pointer;
  varying vec3 v_normal;
  varying vec3 v_world;
  varying vec3 v_object;
  varying float v_flow;
  mat3 rotateX(float a) { float s=sin(a),c=cos(a); return mat3(1.,0.,0.,0.,c,-s,0.,s,c); }
  mat3 rotateY(float a) { float s=sin(a),c=cos(a); return mat3(c,0.,s,0.,1.,0.,-s,0.,c); }
  void main() {
    float pulse = sin(a_position.y*6.0+u_time*1.1)*sin(a_position.x*5.0-u_time*.8)*.035;
    vec3 displaced = a_position + a_normal*pulse;
    mat3 rotation = rotateY(u_time*.58+u_pointer.x*.32)*rotateX(-.20+sin(u_time*.38)*.1+u_pointer.y*.22);
    v_object = displaced;
    v_world = rotation*displaced;
    v_normal = normalize(rotation*a_normal);
    v_flow = pulse;
    gl_Position = vec4(v_world.xy*.76,v_world.z*.18,1.0);
  }
`;

const fragmentSource = `
  precision mediump float;
  uniform float u_time;
  varying vec3 v_normal;
  varying vec3 v_world;
  varying vec3 v_object;
  varying float v_flow;
  void main() {
    float t=u_time*1.18;
    float aurora=sin(v_object.y*5.4+v_object.x*2.8+sin(v_object.z*4.2+t)*1.5+t)*.5+.5;
    float ribbon=sin(v_object.x*6.0-v_object.y*3.8+sin(v_object.z*3.0-t)*1.8-t*.7)*.5+.5;
    float sweep=sin(v_world.y*8.0+v_world.x*3.2-t*2.1)*.5+.5;
    float glow=smoothstep(.34,.82,aurora);
    vec3 mint=vec3(.18,1.0,.77), cyan=vec3(.04,.72,1.0);
    vec3 violet=vec3(.49,.20,1.0), magenta=vec3(1.0,.18,.68);
    vec3 color=mix(violet,cyan,glow);
    color=mix(color,mint,smoothstep(.58,.96,ribbon)*.9);
    color=mix(color,magenta,smoothstep(.70,.98,aurora*ribbon)*.82);
    color+=mix(cyan,magenta,v_world.x*.5+.5)*smoothstep(.72,.98,sweep)*.52;
    vec3 lightDirection=normalize(vec3(-.55,.78,1.4));
    float diffuse=max(dot(v_normal,lightDirection),0.0);
    float fresnel=pow(1.0-max(v_normal.z,0.0),2.5);
    float specular=pow(max(dot(v_normal,normalize(vec3(-.4,.55,1.5))),0.0),42.0);
    float contour=pow(abs(sin(asin(clamp(v_normal.y,-1.0,1.0))*18.0)),24.0);
    color*=.31+diffuse*.78;
    color+=mix(mint,magenta,v_object.x*.5+.5)*fresnel*.66;
    color+=vec3(.82,.94,1.0)*specular*.42;
    color+=mix(cyan,violet,aurora)*contour*.08;
    color+=abs(v_flow)*1.8;
    gl_FragColor=vec4(color,.96);
  }
`;

type Renderer = { draw: (elapsed:number,pointer:[number,number])=>void; dispose:()=>void };

function createSphere(latitudeSegments=32,longitudeSegments=48) {
  const vertices:number[]=[];
  const indices:number[]=[];
  for(let lat=0;lat<=latitudeSegments;lat++) {
    const theta=lat/latitudeSegments*Math.PI;
    const sinTheta=Math.sin(theta), cosTheta=Math.cos(theta);
    for(let lon=0;lon<=longitudeSegments;lon++) {
      const phi=lon/longitudeSegments*Math.PI*2;
      const x=sinTheta*Math.cos(phi), y=cosTheta, z=sinTheta*Math.sin(phi);
      vertices.push(x,y,z,x,y,z);
    }
  }
  for(let lat=0;lat<latitudeSegments;lat++) for(let lon=0;lon<longitudeSegments;lon++) {
    const first=lat*(longitudeSegments+1)+lon;
    const second=first+longitudeSegments+1;
    indices.push(first,second,first+1,second,second+1,first+1);
  }
  return {vertices:new Float32Array(vertices),indices:new Uint16Array(indices)};
}

function createRenderer(canvas:HTMLCanvasElement):Renderer|null {
  const gl=canvas.getContext("webgl",{alpha:true,antialias:true,depth:true,stencil:false,premultipliedAlpha:false,powerPreference:"low-power"});
  if(!gl) return null;
  const compile=(type:number,source:string)=>{
    const shader=gl.createShader(type);
    if(!shader) return null;
    gl.shaderSource(shader,source); gl.compileShader(shader);
    if(!gl.getShaderParameter(shader,gl.COMPILE_STATUS)){ gl.deleteShader(shader); return null; }
    return shader;
  };
  const vertex=compile(gl.VERTEX_SHADER,vertexSource), fragment=compile(gl.FRAGMENT_SHADER,fragmentSource);
  const program=gl.createProgram();
  if(!vertex||!fragment||!program) return null;
  gl.attachShader(program,vertex); gl.attachShader(program,fragment); gl.linkProgram(program);
  gl.deleteShader(vertex); gl.deleteShader(fragment);
  if(!gl.getProgramParameter(program,gl.LINK_STATUS)){ gl.deleteProgram(program); return null; }
  const sphere=createSphere();
  const vertexBuffer=gl.createBuffer(), indexBuffer=gl.createBuffer();
  if(!vertexBuffer||!indexBuffer){ gl.deleteProgram(program); return null; }
  gl.useProgram(program);
  gl.bindBuffer(gl.ARRAY_BUFFER,vertexBuffer); gl.bufferData(gl.ARRAY_BUFFER,sphere.vertices,gl.STATIC_DRAW);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,indexBuffer); gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,sphere.indices,gl.STATIC_DRAW);
  const stride=6*Float32Array.BYTES_PER_ELEMENT;
  const position=gl.getAttribLocation(program,"a_position"), normal=gl.getAttribLocation(program,"a_normal");
  gl.enableVertexAttribArray(position); gl.vertexAttribPointer(position,3,gl.FLOAT,false,stride,0);
  gl.enableVertexAttribArray(normal); gl.vertexAttribPointer(normal,3,gl.FLOAT,false,stride,3*Float32Array.BYTES_PER_ELEMENT);
  const time=gl.getUniformLocation(program,"u_time"), pointerUniform=gl.getUniformLocation(program,"u_pointer");
  gl.enable(gl.DEPTH_TEST); gl.enable(gl.CULL_FACE); gl.cullFace(gl.BACK);
  return {
    draw(elapsed,pointer){
      gl.viewport(0,0,canvas.width,canvas.height); gl.clearColor(0,0,0,0); gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
      gl.uniform1f(time,elapsed); gl.uniform2f(pointerUniform,pointer[0],pointer[1]);
      gl.drawElements(gl.TRIANGLES,sphere.indices.length,gl.UNSIGNED_SHORT,0);
    },
    dispose(){ gl.deleteBuffer(vertexBuffer); gl.deleteBuffer(indexBuffer); gl.deleteProgram(program); },
  };
}

export function AuroraBackground(){
  const sceneRef=useRef<HTMLDivElement>(null), canvasRef=useRef<HTMLCanvasElement>(null);
  useEffect(()=>{
    const scene=sceneRef.current, canvas=canvasRef.current;
    if(!scene||!canvas) return;
    let renderer=createRenderer(canvas), visible=true, frame=0, elapsed=0, lastTime=0, lastDraw=0;
    let pointer:[number,number]=[0,0], targetPointer:[number,number]=[0,0];
    const draw=()=>{ renderer?.draw(elapsed,pointer); if(renderer) canvas.dataset.ready="true"; };
    const tick=(now:number)=>{
      if(lastTime) elapsed+=Math.min((now-lastTime)/1000,.1); lastTime=now;
      pointer=[pointer[0]+(targetPointer[0]-pointer[0])*.07,pointer[1]+(targetPointer[1]-pointer[1])*.07];
      if(now-lastDraw>=1000/30){ draw(); lastDraw=now; }
      frame=requestAnimationFrame(tick);
    };
    const sync=()=>{ cancelAnimationFrame(frame); lastTime=0; lastDraw=0; if(!renderer||!visible||document.hidden)return; draw(); frame=requestAnimationFrame(tick); };
    const resize=()=>{
      const dpr=Math.min(window.devicePixelRatio||1,1.35);
      const width=Math.min(760,Math.max(1,Math.round(canvas.clientWidth*dpr)));
      const height=Math.min(760,Math.max(1,Math.round(canvas.clientHeight*dpr)));
      if(canvas.width!==width||canvas.height!==height){canvas.width=width;canvas.height=height;} draw();
    };
    const onPointerMove=(event:PointerEvent)=>{
      const bounds=scene.getBoundingClientRect();
      targetPointer=[((event.clientX-bounds.left)/bounds.width-.5)*2,((event.clientY-bounds.top)/bounds.height-.5)*-2];
    };
    const intersection=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;sync();});
    const sizes=new ResizeObserver(resize);
    intersection.observe(scene); sizes.observe(canvas); scene.addEventListener("pointermove",onPointerMove);
    document.addEventListener("visibilitychange",sync); resize(); sync();
    return()=>{
      cancelAnimationFrame(frame); intersection.disconnect(); sizes.disconnect(); scene.removeEventListener("pointermove",onPointerMove);
      document.removeEventListener("visibilitychange",sync); renderer?.dispose(); renderer=null;
    };
  },[]);
  return <div ref={sceneRef} className="hero-orb-stage" aria-hidden="true">
    <div className="hero-orb-glow"/>
    <div className="hero-orb-fallback"/><canvas ref={canvasRef} className="hero-orb-canvas"/>
  </div>;
}
