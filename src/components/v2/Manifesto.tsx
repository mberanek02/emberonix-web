'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from '@/lib/gsapSetup';

const TEXT =
  'One engineer. Two crafts. I design websites that make small businesses impossible to ignore — and I build AI systems that do real work in production. No agencies, no hand-offs, no slideware.';

/* Pinned manifesto: each word burns in from ash-grey to bone as you scroll. */
export function Manifesto() {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) {
        gsap.set('.manifesto-word', { opacity: 1 });
        return;
      }
      gsap.fromTo(
        '.manifesto-word',
        { opacity: 0.12 },
        {
          opacity: 1,
          ease: 'none',
          stagger: 0.06,
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top 70%',
            end: 'bottom 45%',
            scrub: 0.4,
          },
        },
      );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative px-6 md:px-10 py-28 md:py-44">
      <div className="mx-auto max-w-[1200px]">
        <span className="mono-label text-accent block mb-8">// THE SHORT VERSION</span>
        <p className="font-sans text-2xl md:text-4xl lg:text-[2.75rem] leading-snug md:leading-snug text-text-primary font-medium">
          {TEXT.split(' ').map((w, i) => (
            <span key={i} className="manifesto-word inline">
              {w}{' '}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
