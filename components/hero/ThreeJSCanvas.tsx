"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function AnimatedSphere() {
  const mesh1Ref = useRef<THREE.Mesh>(null);
  const mesh2Ref = useRef<THREE.Mesh>(null);
  const mesh3Ref = useRef<THREE.Mesh>(null);
  const mesh4Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (mesh1Ref.current) {
      mesh1Ref.current.rotation.x = time * 0.2;
      mesh1Ref.current.rotation.y = time * 0.3;
    }
    if (mesh2Ref.current) {
      mesh2Ref.current.rotation.x = time * -0.15;
      mesh2Ref.current.rotation.y = time * 0.25;
    }
    if (mesh3Ref.current) {
      mesh3Ref.current.rotation.x = time * 0.25;
      mesh3Ref.current.rotation.y = time * -0.2;
    }
    if (mesh4Ref.current) {
      mesh4Ref.current.rotation.x = time * -0.18;
      mesh4Ref.current.rotation.y = time * -0.28;
    }
  });

  return (
    <group>
      {/* Outer glow layer - Purple/Pink */}
      <Sphere ref={mesh1Ref} args={[1, 100, 200]} scale={2.8}>
        <MeshDistortMaterial
          color="#EC4899"
          attach="material"
          distort={0.4}
          speed={1.2}
          roughness={0}
          metalness={0.1}
          transparent
          opacity={0.15}
          emissive="#EC4899"
          emissiveIntensity={0.3}
        />
      </Sphere>

      {/* Mid layer - Blue/Purple gradient effect */}
      <Sphere ref={mesh2Ref} args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial
          color="#8B5CF6"
          attach="material"
          distort={0.35}
          speed={1.5}
          roughness={0.1}
          metalness={0.2}
          transparent
          opacity={0.25}
          emissive="#8B5CF6"
          emissiveIntensity={0.4}
        />
      </Sphere>

      {/* Core layer - Bright Blue */}
      <Sphere ref={mesh3Ref} args={[1, 100, 200]} scale={2.0}>
        <MeshDistortMaterial
          color="#3B82F6"
          attach="material"
          distort={0.3}
          speed={1.8}
          roughness={0.05}
          metalness={0.4}
          transparent
          opacity={0.4}
          emissive="#3B82F6"
          emissiveIntensity={0.6}
        />
      </Sphere>

      {/* Inner core - Cyan/White glassmorphism */}
      <Sphere ref={mesh4Ref} args={[1, 100, 200]} scale={1.6}>
        <MeshDistortMaterial
          color="#06B6D4"
          attach="material"
          distort={0.25}
          speed={2}
          roughness={0}
          metalness={0.8}
          transparent
          opacity={0.6}
          emissive="#FFFFFF"
          emissiveIntensity={0.8}
        />
      </Sphere>
    </group>
  );
}

function Particles() {
  const pointsRef = useRef<THREE.Points>(null);

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.05;
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.075;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particlesPosition, 3]}
          count={particlesPosition.length / 3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.015} color="#8B5CF6" sizeAttenuation transparent opacity={0.8} />
    </points>
  );
}

export function ThreeJSCanvas() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        className="bg-transparent"
      >
        {/* Ambient light for overall scene */}
        <ambientLight intensity={0.3} />

        {/* Dramatic key lights from different angles */}
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#3B82F6" />
        <pointLight position={[-5, -5, 5]} intensity={1.2} color="#EC4899" />
        <pointLight position={[0, 5, -5]} intensity={1} color="#8B5CF6" />

        {/* Rim lighting for depth */}
        <pointLight position={[10, 0, -10]} intensity={0.8} color="#06B6D4" />
        <pointLight position={[-10, 0, 10]} intensity={0.6} color="#A855F7" />

        <AnimatedSphere />
        <Particles />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
