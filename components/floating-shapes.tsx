'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useRef, useMemo } from 'react';

function FloatingParticleSphere() {
  const pointsRef = useRef<THREE.Points>(null!);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 2000; i++) {
      temp.push(THREE.MathUtils.randFloatSpread(50));
      temp.push(THREE.MathUtils.randFloatSpread(50));
      temp.push(THREE.MathUtils.randFloatSpread(50));
    }
    return new Float32Array(temp);
  }, []);

  useFrame((state, delta) => {
    pointsRef.current.rotation.y += delta * 0.02;
    pointsRef.current.rotation.x += delta * 0.01;
    state.camera.position.lerp(new THREE.Vector3(state.mouse.x * 2, state.mouse.y * 2, 10), 0.05);
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <Points ref={pointsRef} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#bd00ff"
        size={0.1}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function FloatingCore() {
  return (
    <Sphere args={[1, 64, 64]} position={[-5, 2, -2]}>
      <MeshDistortMaterial
        color="#00f2fe"
        envMapIntensity={0.4}
        clearcoat={0.8}
        clearcoatRoughness={0}
        distort={0.3}
        speed={2}
      />
    </Sphere>
  )
}

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#bd00ff" />
        <FloatingParticleSphere />
        <FloatingCore />
      </Canvas>
    </div>
  );
}
