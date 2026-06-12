'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsapSetup';
import { EmberField } from './EmberField';
import { Magnetic } from './Magnetic';
import { PRELOADER_TOTAL_MS } from './Preloader';

/** Splits a string into per-char spans that can rise out of a clipping line. */
function Chars({ text, className = '' }: { text: string; className?: string }) {
  return (
    <span className={`inline-block overflow-hidden align-bottom ${className}`} aria-hidden="true">
      {text.split('').map((c, i) => (
        <span key={i} className="hero-char inline-block will-change-transform">
          {c === ' ' ? ' ' : c}
        </span>
      ))}
    </span>
  );
}

export function HeroV2() {
  const rootRef = useRef<HTMLElement>(null);
  const scrollProgress = useRef(0);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const delay = reduced ? 0 : PRELOADER_TOTAL_MS / 1000 - 0.45;

      if (reduced) {
        gsap.set('.hero-char, .hero-fade', { y: 0, opacity: 1 });
        return;
      }

      gsap.set('.hero-char', { yPercent: 115 });
      gsap.set('.hero-fade', { opacity: 0, y: 18 });

      gsap.timeline({ delay })
        .to('.hero-char', {
          yPercent: 0,
          duration: 1.1,
          ease: 'power4.out',
          stagger: { each: 0.022, from: 'start' },
        })
        .to('.hero-fade', {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.08,
        }, '-=0.55');

      // Scroll: headline drifts and the ember field scatters
      ScrollTrigger.create({
        trigger: rootRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => { scrollProgress.current = self.progress; },
      });

      gsap.to('.hero-stage', {
        yPercent: -18,
        opacity: 0.25,
        ease: 'none',
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} id="top" className="relative min-h-[100svh] overflow-hidden flex flex-col">
      {/* WebGL ember field */}
      <div className="absolute inset-0 z-0">
        <EmberField scrollProgressRef={scrollProgress} />
      </div>
      {/* Vignette for legibility */}
      <div className="absolute inset-0 z-[1] pointer-events-none hero-vignette" />

      <div className="hero-stage relative z-10 flex-1 flex flex-col justify-center mx-auto max-w-[1680px] w-full px-6 md:px-10 pt-28 pb-16">
        {/* Eyebrow */}
        <p className="hero-fade mono-label text-text-muted mb-6 md:mb-10">
          INDEPENDENT ENGINEER & DESIGNER <span className="text-accent mx-2">●</span> EST. 2026
          <span className="hidden md:inline"><span className="text-accent mx-2">●</span> TWENTY YEARS OF HEAT</span>
        </p>

        {/* Monument headline */}
        <h1 className="hero-h1 font-display uppercase leading-[0.88] tracking-tight text-text-primary">
          <span className="block">
            <Chars text="SITES THAT" />{' '}
            <em className="hero-serif not-italic text-blue"><Chars text="sell." /></em>
          </span>
          <span className="block">
            <Chars text="AGENTS THAT" />{' '}
            <em className="hero-serif text-accent not-italic"><Chars text="ship." /></em>
          </span>
        </h1>
        <span className="sr-only">Sites that sell. Agents that ship.</span>

        {/* Sub + CTAs */}
        <div className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
          <p className="hero-fade font-sans text-body-lg text-text-secondary max-w-md leading-relaxed">
            Design-forward websites for businesses that refuse to be ignored —
            and production AI systems that earn their keep. One engineer,
            end to end.
          </p>
          <div className="hero-fade flex flex-wrap gap-4">
            <Magnetic>
              <a href="#work" className="btn-primary" data-cursor="link">
                I Need a Website
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#systems" className="btn-ghost" data-cursor="link">
                I Need AI Engineering
              </a>
            </Magnetic>
          </div>
        </div>
      </div>

      {/* Bottom meta strip */}
      <div className="hero-fade relative z-10 mx-auto max-w-[1680px] w-full px-6 md:px-10 pb-8 flex items-center justify-center">
        <span className="mono-label text-text-muted flex items-center gap-3">
          SCROLL
          <span className="scroll-line" aria-hidden="true" />
        </span>
      </div>
    </section>
  );
}
