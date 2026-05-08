'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { useRef, Suspense, useState } from 'react';

function FloatingParticles() {
  const pointsRef = useRef<THREE.Points>(null!);

  const particleCount = 1500;
  const [particlesPosition] = useState(() => {
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const radius = 15 + Math.random() * 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }

    return positions;
  });

  useFrame((state, delta) => {
    pointsRef.current.rotation.y += delta * 0.05;
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
  });

  return (
    <Points ref={pointsRef} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#6366f1"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.4}
      />
    </Points>
  );
}

function BackgroundGradient() {
  return (
    <mesh>
      <sphereGeometry args={[100, 32, 32]} />
      <meshBasicMaterial color="#09090b" side={THREE.BackSide} />
    </mesh>
  );
}

export function Background3D() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        gl={{ alpha: false, antialias: true }}
        style={{ background: '#09090b' }}
      >
        <Suspense fallback={null}>
          <BackgroundGradient />
          <FloatingParticles />
          <Stars
            radius={100}
            depth={50}
            count={1000}
            factor={4}
            saturation={0}
            fade
            speed={0.5}
          />
        </Suspense>
      </Canvas>

      <div className="absolute inset-0 bg-linear-to-b from-black/50 via-transparent to-black/50 pointer-events-none" />
    </div>
  );
}
