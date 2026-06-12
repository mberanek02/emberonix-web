'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from '@/lib/gsapSetup';

/* Contextual cursor lens: the native cursor stays everywhere; a labeled
 * lens ("VIEW ↗", "EMAIL →") fades in alongside it only over rich targets
 * marked with [data-cursor="view"]. Desktop pointers only. */
export function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState('');
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const ring = ringRef.current;
    if (!ring) return;

    const ringX = gsap.quickTo(ring, 'x', { duration: 0.3, ease: 'power3.out' });
    const ringY = gsap.quickTo(ring, 'y', { duration: 0.3, ease: 'power3.out' });

    const move = (e: MouseEvent) => {
      ringX(e.clientX);
      ringY(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const view = t.closest('[data-cursor="view"]');
      if (view) {
        setLabel(view.getAttribute('data-cursor-label') ?? 'VIEW');
        ring.classList.add('cursor-ring--view');
      } else {
        ring.classList.remove('cursor-ring--view');
      }
    };

    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mouseover', over, { passive: true });
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div ref={ringRef} className="cursor-ring" aria-hidden="true">
      <span className="cursor-ring__label">{label}</span>
    </div>
  );
}
