'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from '@/lib/gsapSetup';

const STEPS = [
  {
    index: '01',
    title: 'The Call',
    body: 'A free 20-minute call. You talk business, I translate it into scope — you leave with a fixed quote and a timeline. No obligation, no hourly meter.',
    meta: 'FREE ● 20 MINUTES',
  },
  {
    index: '02',
    title: 'The Build',
    body: 'I design and build end-to-end, and you watch it happen on a real URL — clickable progress, not slideware status updates. One person, accountable for everything.',
    meta: 'WEEKS, NOT MONTHS',
  },
  {
    index: '03',
    title: 'The Launch',
    body: 'We ship. I hand over everything, show you how to run what needs running, and stay reachable after launch — your site or system doesn’t get orphaned.',
    meta: 'SUPPORTED AFTER SHIP',
  },
];

/* The close: three steps from stranger to shipped. */
export function HowItWorks() {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) return;
      gsap.fromTo(
        '.step-card',
        { y: 48, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.14,
          scrollTrigger: { trigger: rootRef.current, start: 'top 75%', once: true },
        },
      );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} id="process" className="relative px-6 md:px-10 py-24 md:py-32 hairline-t">
      <div className="mx-auto max-w-[1480px]">
        <div className="mb-14 md:mb-18 max-w-3xl">
          <span className="mono-label text-accent block mb-4">// 05 / HOW IT WORKS</span>
          <h2 className="font-display uppercase text-h2 md:text-display-sm text-text-primary">
            Three steps.
            <br />
            <em className="hero-serif text-accent not-italic">Zero mystery.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {STEPS.map((step, i) => (
            <article
              key={step.index}
              className="step-card relative border border-hairline hover:border-accent bg-bg-card p-8 md:p-9 transition-colors duration-500 overflow-hidden group"
            >
              <span
                aria-hidden="true"
                className="absolute -right-3 -top-8 font-display text-[7rem] leading-none text-accent opacity-[0.08] group-hover:opacity-[0.16] transition-opacity duration-500"
              >
                {step.index}
              </span>
              <span className="mono-label text-accent block mb-6">{step.index}</span>
              <h3 className="font-display uppercase text-3xl text-text-primary mb-4">{step.title}</h3>
              <p className="font-sans text-body text-text-secondary leading-relaxed mb-6">{step.body}</p>
              <span className="mono-label text-text-dim">{step.meta}</span>
              {i < STEPS.length - 1 && (
                <span aria-hidden="true" className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-accent z-10">
                  →
                </span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
