'use client';

import { ScrollReveal } from './ScrollReveal';

/**
 * Engineering Stack — bento grid hero feature section adapted from the
 * Stitch home mockups. Replaces marketing prose with the technical posture
 * that the new brand demands.
 */
export function EngineeringStack() {
  return (
    <section
      id="engineering-stack"
      className="px-6 md:px-12 lg:px-16 py-20 md:py-28 hairline-t"
    >
      <div className="mx-auto max-w-container">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-12 md:mb-16">
            <span className="mono-label text-accent block mb-4">
              // 05 / BUILD POSTURE
            </span>
            <h2 className="font-display uppercase text-h2 md:text-h1 text-text-primary mb-4">
              Engineering Stack
            </h2>
            <div className="accent-line" />
          </div>
        </ScrollReveal>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Large lead card */}
          <ScrollReveal className="md:col-span-8">
            <article className="relative h-full bg-bg-card border border-hairline p-8 md:p-12 overflow-hidden group">
              <span className="mono-label text-accent mb-4 block">
                01 / NEURAL COMPUTE
              </span>
              <h3 className="font-display uppercase text-3xl md:text-4xl text-text-primary mb-6">
                Deterministic Agentic Logic
              </h3>
              <p className="font-sans text-body text-text-secondary max-w-md mb-8 leading-relaxed">
                Plan-apply-unify cycles, contract-driven steps, and human
                approval gates. Every agent decision is traceable, reversible,
                and constrained inside your architectural guardrails.
              </p>
              <ul className="space-y-3 font-mono text-sm text-text-secondary">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent" />
                  TRACEABLE INFERENCE PATHS
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent" />
                  CONTRACT-DRIVEN EXECUTION
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent" />
                  HITL APPROVAL GATES
                </li>
              </ul>

              {/* Decorative circuit glow */}
              <div
                aria-hidden="true"
                className="absolute -bottom-20 -right-20 w-[480px] h-[480px] rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-700"
                style={{
                  background:
                    'radial-gradient(circle, rgba(249,115,22,0.4) 0%, transparent 60%)',
                }}
              />
            </article>
          </ScrollReveal>

          {/* Sovereignty card */}
          <ScrollReveal delay={0.1} className="md:col-span-4">
            <article className="h-full bg-bg-container-high border border-hairline-strong p-8 flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 mb-6 flex items-center justify-center border border-tertiary text-tertiary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L4 6v6c0 5 3.5 9.5 8 10 4.5-.5 8-5 8-10V6l-8-4z" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
                <h3 className="font-display uppercase text-2xl text-text-primary mb-4">
                  Sovereignty Protocols
                </h3>
                <p className="font-sans text-small text-text-secondary leading-relaxed">
                  Human-in-the-loop intervention systems that prevent cascading
                  failures in autonomous deployments.
                </p>
              </div>
              <a
                href="#capabilities"
                className="mt-8 mono-label text-accent flex items-center gap-2 group/btn"
              >
                EXPLORE SECURITY
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="transition-transform group-hover/btn:translate-x-1"
                >
                  <path d="M1 7h11m0 0L8 3m4 4L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </article>
          </ScrollReveal>

          {/* Small stat cards */}
          {[
            {
              icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12l-2 2 2 2m14-4l2 2-2 2M9 4l6 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ),
              title: 'Instant Scale',
              body: 'Global edge distribution in < 100ms.',
            },
            {
              icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="4" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="20" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="4" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="20" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M6 7l5 4M18 7l-5 4M6 17l5-4M18 17l-5-4" stroke="currentColor" strokeWidth="1" />
                </svg>
              ),
              title: 'Unified Mesh',
              body: 'Connect agents across any cloud or local stack.',
            },
            {
              icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M3 17l6-6 4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14 7h7v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
              title: 'Real-Time Telemetry',
              body: 'Deep-packet inspection for agent behavior.',
            },
          ].map((card, i) => (
            <ScrollReveal key={card.title} delay={0.15 + i * 0.08} className="md:col-span-4">
              <article className="h-full bg-bg-container border border-hairline p-6 flex flex-col items-center text-center hover:border-accent transition-colors duration-300">
                <span className="text-accent mb-4">{card.icon}</span>
                <h4 className="font-display uppercase text-xl text-text-primary mb-2">
                  {card.title}
                </h4>
                <p className="font-sans text-small text-text-secondary leading-relaxed">
                  {card.body}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
