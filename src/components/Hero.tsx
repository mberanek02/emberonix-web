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
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Three.js artifact — centered behind text */}
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 opacity-50 lg:opacity-80">
        <HeroScene />
      </div>

      <div className="relative z-10 mx-auto max-w-container w-full px-6 md:px-10 pt-32 pb-20 md:pt-40 md:pb-28">
        <div>
          <div className="max-w-2xl">
            {/* Descriptor label */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: dur, delay: 0.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="accent-line" />
              <span className="text-caption uppercase tracking-widest text-accent font-sans font-medium">
                Product Studio
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: dur, delay: 0.2 }}
              className="font-serif font-light text-display-sm md:text-display leading-none tracking-tight text-text-primary mb-6"
            >
              Emberonix
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: dur, delay: 0.35 }}
              className="font-sans text-h3 md:text-h2 font-light text-text-secondary mb-6"
            >
              Product Engineering + Agentic AI
            </motion.p>

            {/* Copy */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: dur, delay: 0.45 }}
              className="font-sans text-body-lg text-text-muted max-w-lg mb-10 leading-relaxed"
            >
              I build and ship AI-driven SaaS and iOS products — and I partner
              with founders and teams to build theirs.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: dur, delay: 0.55 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center px-7 py-3 bg-accent text-bg text-small font-sans font-medium tracking-wide hover:bg-accent-hover transition-colors duration-200"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-7 py-3 border border-hairline-strong text-text-primary text-small font-sans font-medium tracking-wide hover:border-text-secondary transition-colors duration-200"
              >
                Let&rsquo;s Build
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: dur, delay: 1.2 }}
          className="hidden lg:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
        >
          <span className="text-caption text-text-muted tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-text-muted to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
