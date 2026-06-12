'use client';

import dynamic from 'next/dynamic';
import { motion, useReducedMotion } from 'framer-motion';

const HeroScene = dynamic(() => import('./HeroScene').then((m) => m.HeroScene), {
  ssr: false,
  loading: () => null,
});

export function Hero() {
  const shouldReduce = useReducedMotion();
  const dur = shouldReduce ? 0 : 0.7;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden iridescent-bg"
    >
      {/* Engineering-blueprint artifact — smaller, right-aligned, subtle */}
      <div className="absolute right-[-4%] top-1/2 -translate-y-1/2 w-[560px] h-[560px] md:w-[680px] md:h-[680px] lg:w-[760px] lg:h-[760px] opacity-70 pointer-events-none">
        <HeroScene />
      </div>

      {/* Radial wash behind the headline so text remains legible */}
      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-container w-full px-6 md:px-12 lg:px-16 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-5xl">
          {/* Status meta — mono labels */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: dur, delay: 0.1 }}
            className="flex flex-wrap items-center gap-3 mb-8"
          >
            <span className="mono-label text-text-muted">EST. 2026</span>
            <span className="mono-label text-text-muted hidden md:inline">
              // SYSTEM STATUS: OPERATIONAL
            </span>
          </motion.div>

          {/* Headline — Bebas Neue, uppercase */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: dur, delay: 0.2 }}
            className="font-display uppercase text-[56px] md:text-[88px] lg:text-display leading-[0.92] tracking-tight text-text-primary mb-10"
          >
            <span className="text-accent">EMBERONIX:</span>
            <br />
            <span className="text-blue">SITES THAT SELL.</span>
            <br />
            <span className="text-text-primary">AGENTS THAT SHIP.</span>
          </motion.h1>

          {/* Sub copy */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: dur, delay: 0.4 }}
            className="font-sans text-body-lg md:text-xl text-text-secondary max-w-2xl mb-4 leading-relaxed"
          >
            Two practices, one engineer: exciting, design-forward websites
            that make small businesses impossible to ignore, and
            production-grade agentic AI for companies that need automation to
            actually work. 20 years of engineering behind both.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: dur, delay: 0.5 }}
            className="mono-label text-text-muted mb-12"
          >
            // CLIENT SITES ● OWN PRODUCTS IN PRODUCTION ● ONE OPERATOR
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: dur, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#client-work" className="btn-primary">
              I Need a Website
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 8h11m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#agentic-work" className="btn-ghost">
              I Need AI Engineering
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
