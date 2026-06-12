'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsapSetup';

const ITEMS = ['SITES THAT SELL', 'AGENTS THAT SHIP', 'DESIGN THAT CONVERTS', 'AI THAT DELIVERS'];

/* Infinite marquee whose speed and skew react to scroll velocity. */
export function MarqueeBand() {
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) return;

      const half = track.scrollWidth / 2;
      const base = gsap.to(track, { x: -half, duration: 28, ease: 'none', repeat: -1 });

      // Scroll velocity bends the band
      let proxy = { skew: 0 };
      const clamp = gsap.utils.clamp(-9, 9);
      ScrollTrigger.create({
        onUpdate: (self) => {
          const skew = clamp(self.getVelocity() / -280);
          if (Math.abs(skew) > Math.abs(proxy.skew)) {
            proxy.skew = skew;
            gsap.to(proxy, {
              skew: 0,
              duration: 0.7,
              ease: 'power3.out',
              overwrite: true,
              onUpdate: () => gsap.set(rootRef.current, { skewY: proxy.skew * 0.25 }),
            });
          }
          base.timeScale(1 + Math.min(Math.abs(self.getVelocity()) / 1800, 2.2));
        },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  const row = [...ITEMS, ...ITEMS];

  return (
    <div ref={rootRef} className="relative py-10 md:py-14 hairline-t hairline-b overflow-hidden select-none">
      <div ref={trackRef} className="flex whitespace-nowrap will-change-transform w-max">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex" aria-hidden={dup === 1}>
            {row.map((item, i) => (
              <span
                key={`${dup}-${i}`}
                className={`font-display uppercase text-5xl md:text-7xl px-6 md:px-10 ${
                  i % 2 === 0 ? 'text-text-primary' : 'marquee-outline'
                }`}
              >
                {item}
                <span className="ml-12 md:ml-20 text-accent">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
