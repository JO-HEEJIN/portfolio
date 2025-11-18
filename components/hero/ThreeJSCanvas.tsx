"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

function AnimatedSphere() {
  const outerRef = useRef<THREE.Mesh>(null);
  const middleRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Outer sphere - slow rotation
    if (outerRef.current) {
      outerRef.current.rotation.x = time * 0.15;
      outerRef.current.rotation.y = time * 0.2;
    }

    // Middle sphere - medium rotation, opposite direction
    if (middleRef.current) {
      middleRef.current.rotation.x = -time * 0.25;
      middleRef.current.rotation.y = time * 0.3;
    }

    // Inner sphere - fast rotation
    if (innerRef.current) {
      innerRef.current.rotation.x = time * 0.35;
      innerRef.current.rotation.y = -time * 0.4;
    }
  });

  return (
    <group>
      {/* Outer layer - Blue */}
      <Sphere ref={outerRef} args={[1, 128, 128]} scale={2.8}>
        <MeshDistortMaterial
          color="#3B82F6"
          emissive="#60A5FA"
          emissiveIntensity={0.8}
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.0}
          metalness={1.0}
          transparent
          opacity={0.6}
        />
      </Sphere>

      {/* Middle layer - Purple */}
      <Sphere ref={middleRef} args={[1, 128, 128]} scale={2.4}>
        <MeshDistortMaterial
          color="#8B5CF6"
          emissive="#A78BFA"
          emissiveIntensity={1.0}
          attach="material"
          distort={0.6}
          speed={2.5}
          roughness={0.0}
          metalness={1.0}
          transparent
          opacity={0.7}
        />
      </Sphere>

      {/* Inner layer - Pink */}
      <Sphere ref={innerRef} args={[1, 128, 128]} scale={2.0}>
        <MeshDistortMaterial
          color="#EC4899"
          emissive="#F472B6"
          emissiveIntensity={1.2}
          attach="material"
          distort={0.7}
          speed={3}
          roughness={0.0}
          metalness={1.0}
          transparent
          opacity={0.8}
        />
      </Sphere>
    </group>
  );
}

function Particles() {
  const pointsRef = useRef<THREE.Points>(null);

  const [particlesPosition, particlesColor] = useMemo(() => {
    const positions = new Float32Array(3000 * 3);
    const colors = new Float32Array(3000 * 3);

    const colorPalette = [
      new THREE.Color("#60A5FA"), // Blue
      new THREE.Color("#A78BFA"), // Purple
      new THREE.Color("#F472B6"), // Pink
      new THREE.Color("#818CF8"), // Indigo
    ];

    for (let i = 0; i < 3000; i++) {
      // Create a more spherical distribution
      const radius = 4 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      // Assign random color from palette
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      const time = state.clock.getElapsedTime();
      pointsRef.current.rotation.x = time * 0.05;
      pointsRef.current.rotation.y = time * 0.075;

      // Pulse effect
      const scale = 1 + Math.sin(time * 0.5) * 0.1;
      pointsRef.current.scale.set(scale, scale, scale);
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
        <bufferAttribute
          attach="attributes-color"
          args={[particlesColor, 3]}
          count={particlesColor.length / 3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        vertexColors
        sizeAttenuation
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export function ThreeJSCanvas() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        className="bg-transparent"
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={3} color="#60A5FA" />
        <pointLight position={[-10, -10, -10]} intensity={2.5} color="#A78BFA" />
        <pointLight position={[0, 10, 0]} intensity={2} color="#EC4899" />
        <pointLight position={[0, -10, 0]} intensity={2} color="#F472B6" />
        <spotLight position={[5, 5, 5]} intensity={2} angle={0.3} penumbra={1} color="#818CF8" />

        <AnimatedSphere />
        <Particles />

        <EffectComposer>
          <Bloom
            intensity={1.5}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
            height={300}
          />
        </EffectComposer>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
