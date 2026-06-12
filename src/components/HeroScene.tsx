'use client';

import { useRef, useEffect, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import type { Group } from 'three';

/**
 * Engineering-blueprint artifact — slow-rotating wireframe torus knot with
 * counter-rotating thin orbital rings. Amber for the primary lattice, deep
 * blue for the counter-axis. Sparse and quiet — meant to feel like a
 * schematic, not a plasma cloud.
 */
function BlueprintArtifact() {
  const groupRef = useRef<Group>(null);
  const amberRef = useRef<Group>(null);
  const blueRef = useRef<Group>(null);

  // Build three thin orbital rings — two amber, one deep blue.
  const orbits = useMemo(() => {
    const items: Array<{
      curve: THREE.EllipseCurve;
      color: string;
      thickness: number;
      tilt: [number, number, number];
      opacity: number;
    }> = [];

    // Amber orbits (engineering primary)
    items.push({
      curve: new THREE.EllipseCurve(0, 0, 2.6, 2.6, 0, Math.PI * 2, false, 0),
      color: '#F97316',
      thickness: 0.008,
      tilt: [0.1, 0, 0],
      opacity: 0.85,
    });
    items.push({
      curve: new THREE.EllipseCurve(0, 0, 2.95, 2.95, 0, Math.PI * 2, false, 0),
      color: '#FFB690',
      thickness: 0.006,
      tilt: [1.1, 0.2, 0],
      opacity: 0.6,
    });

    // Blue counter-axis (design LOB nod)
    items.push({
      curve: new THREE.EllipseCurve(0, 0, 2.75, 2.75, 0, Math.PI * 2, false, 0),
      color: '#3B82F6',
      thickness: 0.007,
      tilt: [Math.PI / 2 - 0.3, 0.5, 0],
      opacity: 0.7,
    });

    return items;
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.05;
      groupRef.current.position.y = Math.sin(t * 0.25) * 0.08;
    }
    if (amberRef.current) {
      amberRef.current.rotation.y = t * 0.04;
      amberRef.current.rotation.z = t * 0.02;
    }
    if (blueRef.current) {
      blueRef.current.rotation.y = -t * 0.035;
      blueRef.current.rotation.x = t * 0.015;
    }
  });

  // Convert each ellipse to a tube ring
  const ringMeshes = (color: string) =>
    orbits
      .filter((o) => o.color === color || (color === 'amber' && o.color !== '#3B82F6') || (color === 'blue' && o.color === '#3B82F6'))
      .map((o, i) => {
        const points2d = o.curve.getPoints(128);
        const points3d = points2d.map((p) => new THREE.Vector3(p.x, p.y, 0));
        const curve = new THREE.CatmullRomCurve3(points3d, true);
        return (
          <mesh key={i} rotation={o.tilt}>
            <tubeGeometry args={[curve, 128, o.thickness, 6, true]} />
            <meshBasicMaterial
              color={o.color}
              transparent
              opacity={o.opacity}
              blending={THREE.AdditiveBlending}
              depthWrite={false}
            />
          </mesh>
        );
      });

  return (
    <group ref={groupRef}>
      {/* Central wireframe torus knot — the engineering core */}
      <mesh ref={amberRef}>
        <torusKnotGeometry args={[1.45, 0.085, 220, 12, 2, 3]} />
        <meshBasicMaterial
          color="#F97316"
          wireframe
          transparent
          opacity={0.55}
        />
      </mesh>

      {/* Counter-axis blue torus knot — slimmer, sparser */}
      <mesh ref={blueRef} rotation={[Math.PI / 3, 0, 0]}>
        <torusKnotGeometry args={[1.85, 0.04, 160, 8, 3, 2]} />
        <meshBasicMaterial
          color="#3B82F6"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Orbital rings */}
      {ringMeshes('amber')}
      {ringMeshes('blue')}

      {/* Soft ember core */}
      <mesh>
        <sphereGeometry args={[0.6, 24, 24]} />
        <meshBasicMaterial
          color="#7C2D12"
          transparent
          opacity={0.45}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
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

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
        frameloop={reducedMotion ? 'never' : 'always'}
        onCreated={({ gl, scene }) => {
          gl.setClearColor(0x000000, 0);
          scene.background = null;
        }}
      >
        <BlueprintArtifact />
      </Canvas>
    </div>
  );
}
