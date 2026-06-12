'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/* Molten backdrop: a full-viewport fragment shader of slow-breathing
 * forge smoke. Dark obsidian with warm pockets that smolder and drift;
 * the cursor carries a faint lantern glow through it. Deliberately slow —
 * atmosphere you feel more than watch. */

const VERT = /* glsl */ `
  void main() {
    gl_Position = vec4(position, 1.0);
  }
`;

const FRAG = /* glsl */ `
  precision highp float;
  uniform float uTime;
  uniform vec2 uRes;
  uniform vec2 uMouse;    // 0..1, y up
  uniform float uOpacity;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 4; i++) {
      v += a * noise(p);
      p = p * 2.03 + vec2(7.3, 1.9);
      a *= 0.5;
    }
    return v;
  }

  void main() {
    float aspect = uRes.x / uRes.y;
    vec2 uv = gl_FragCoord.xy / uRes;
    vec2 sp = vec2(uv.x * aspect, uv.y);     // aspect-corrected space
    vec2 m = vec2(uMouse.x * aspect, uMouse.y);
    float t = uTime * 0.055;

    // The cursor bends the smoke field around itself — visible, physical
    float md = distance(sp, m);
    vec2 bend = (sp - m) * exp(-md * 2.4) * 0.55;

    vec2 p = (sp + bend) * 2.4;

    // Domain-warped smoke — two interleaved cloud systems
    vec2 warp = vec2(fbm(p * 1.3 + t * 0.8), fbm(p * 1.3 - t * 0.6));
    float n = fbm(p + warp * 1.1 + vec2(t * 0.5, -t * 0.7));
    float n2 = fbm(p * 1.12 + warp * 0.8 + vec2(-t * 0.55, t * 0.4) + 4.7);

    // Palette — ember warmth + navy cool, two weather fronts sharing a sky
    vec3 obsidian = vec3(0.030, 0.028, 0.027);
    vec3 charcoal = vec3(0.105, 0.082, 0.064);
    vec3 ember    = vec3(0.80, 0.32, 0.07);
    vec3 navy     = vec3(0.05, 0.13, 0.40);
    vec3 blueGlow = vec3(0.16, 0.38, 0.95);

    vec3 col = mix(obsidian, charcoal, smoothstep(0.22, 0.85, n));

    // Smoldering ember crests
    float glow = smoothstep(0.58, 0.95, n);
    col += ember * glow * 0.50;

    // Cool navy banks — broad clouds that yield where the embers burn
    float cool = smoothstep(0.46, 0.82, n2) * (1.0 - glow * 0.7);
    col = mix(col, navy, cool * 0.8);
    col += blueGlow * cool * cool * 0.3;

    // Heat rising from the lower edge
    col += ember * (1.0 - uv.y) * 0.11 * fbm(p * 0.8 + vec2(0.0, t * 1.5));

    // Cursor heat bloom — the smoke ignites where you point
    col += ember * exp(-md * 2.6) * 0.28 * (0.7 + 0.3 * glow);

    // Edge vignette
    float vig = smoothstep(1.25, 0.45, distance(uv, vec2(0.5)));
    col *= mix(0.72, 1.0, vig);

    gl_FragColor = vec4(col * uOpacity, 1.0);
  }
`;

export function EmberField({ scrollProgressRef }: { scrollProgressRef?: React.MutableRefObject<number> }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    // WebGL may be unavailable (GPU blocklist, headless, old hardware) —
    // the site must degrade to a static hero, never crash.
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: false, antialias: false, powerPreference: 'high-performance' });
    } catch {
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    mount.appendChild(renderer.domElement);

    const mat = new THREE.ShaderMaterial({
      vertexShader: VERT,
      fragmentShader: FRAG,
      depthWrite: false,
      depthTest: false,
      uniforms: {
        uTime: { value: 0 },
        uRes: { value: new THREE.Vector2(1, 1) },
        uMouse: { value: new THREE.Vector2(0.5, 0.55) },
        uOpacity: { value: 0 },
      },
    });
    const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
    scene.add(quad);

    const resize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      renderer.setSize(w, h);
      mat.uniforms.uRes.value.set(w * renderer.getPixelRatio(), h * renderer.getPixelRatio());
    };
    resize();
    window.addEventListener('resize', resize);

    // Cursor in 0..1 (y up), eased
    const target = new THREE.Vector2(0.5, 0.55);
    const mouse = new THREE.Vector2(0.5, 0.55);
    const onMove = (e: MouseEvent) => {
      const r = mount.getBoundingClientRect();
      target.set(
        (e.clientX - r.left) / r.width,
        1 - (e.clientY - r.top) / r.height,
      );
    };
    window.addEventListener('mousemove', onMove, { passive: true });

    let visible = true;
    const io = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    io.observe(mount);

    let raf = 0;
    const clock = new THREE.Clock();
    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!visible || document.hidden) return;
      mouse.lerp(target, 0.07);
      mat.uniforms.uTime.value = clock.getElapsedTime();
      mat.uniforms.uMouse.value.copy(mouse);
      // Ease in, then dim slightly as the hero scrolls away
      const scroll = scrollProgressRef?.current ?? 0;
      const base = Math.min(1, mat.uniforms.uOpacity.value + 0.05);
      mat.uniforms.uOpacity.value = base * (1 - scroll * 0.4);
      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      quad.geometry.dispose();
      mat.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, [scrollProgressRef]);

  return <div ref={mountRef} className="absolute inset-0" aria-hidden="true" />;
}
