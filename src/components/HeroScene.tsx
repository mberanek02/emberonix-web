'use client';

import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import type { Mesh, Group } from 'three';

function WireframeArtifact() {
  const primaryRef = useRef<Mesh>(null);
  const secondaryRef = useRef<Mesh>(null);
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (primaryRef.current) {
      primaryRef.current.rotation.y = t * 0.06;
      primaryRef.current.rotation.x = t * 0.04;
    }
    if (secondaryRef.current) {
      secondaryRef.current.rotation.y = -t * 0.04;
      secondaryRef.current.rotation.z = t * 0.025;
    }
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 0.3) * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Primary icosahedron */}
      <mesh ref={primaryRef}>
        <icosahedronGeometry args={[2.8, 1]} />
        <meshBasicMaterial
          wireframe
          color="#E07A5F"
          transparent
          opacity={0.1}
        />
      </mesh>

      {/* Secondary octahedron — larger, slower, fainter */}
      <mesh ref={secondaryRef}>
        <octahedronGeometry args={[4, 0]} />
        <meshBasicMaterial
          wireframe
          color="#E07A5F"
          transparent
          opacity={0.04}
        />
      </mesh>

      {/* Inner tetrahedron for depth */}
      <mesh rotation={[0.5, 0.3, 0]}>
        <tetrahedronGeometry args={[1.4, 0]} />
        <meshBasicMaterial
          wireframe
          color="#EDEDED"
          transparent
          opacity={0.06}
        />
      </mesh>
    </group>
  );
}

function SceneContent() {
  return (
    <>
      <WireframeArtifact />
    </>
  );
}

export function HeroScene() {
  const [mounted, setMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  if (!mounted || reducedMotion) return null;

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
        onCreated={({ gl, scene }) => {
          gl.setClearColor(0x000000, 0);
          scene.background = null;
        }}
      >
        <SceneContent />
      </Canvas>
    </div>
  );
}
