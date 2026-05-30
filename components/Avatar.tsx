'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useRef } from 'react';

function Particles() {
  const particlesRef = useRef<THREE.Points>(null);

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x += 0.0001;
      particlesRef.current.rotation.y += 0.0002;
    }
  });

  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCnt = 500;
  const posArray = new Float32Array(particlesCnt * 3);

  for (let i = 0; i < particlesCnt * 3; i += 3) {
    posArray[i] = (Math.random() - 0.5) * 4;
    posArray[i + 1] = (Math.random() - 0.5) * 4;
    posArray[i + 2] = (Math.random() - 0.5) * 4;
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

  return (
    <points ref={particlesRef} geometry={particlesGeometry}>
      <pointsMaterial size={0.02} color="#6366f1" sizeAttenuation />
    </points>
  );
}

function AvatarMesh() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        color="#6366f1"
        metalness={0.4}
        roughness={0.6}
        emissive="#4f46e5"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

export function Avatar() {
  return (
    <div className="h-96 w-full rounded-lg overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800">
      <Suspense fallback={<div className="h-full w-full bg-slate-800" />}>
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 3]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          <pointLight position={[-10, -10, 10]} intensity={0.4} color="#6366f1" />
          
          <AvatarMesh />
          <Particles />
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={4}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}
