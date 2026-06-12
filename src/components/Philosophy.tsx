'use client';

import { ScrollReveal } from './ScrollReveal';

interface Pillar {
  number: string;
  label: string;
  title: string;
  body: string;
  href: string;
}

const PILLARS: Pillar[] = [
  {
    number: '01',
    label: 'AUTOMATION',
    title: 'Autonomous CI/CD',
    body:
      'Pipelines that observe, decide, and act. Plan-apply-unify gates surface every decision the agent makes — review what you want, accept what you trust.',
    href: '#engineering-stack',
  },
  {
    number: '02',
    label: 'INTELLIGENCE',
    title: 'AI Codebase Digital Twins',
    body:
      'Living, queryable models of your repos. Architecture, dependencies, and behavioral footprints continuously indexed for agentic refactor and discovery.',
    href: '#products',
  },
  {
    number: '03',
    label: 'SECURITY',
    title: 'Agentic Security & Deep Shield',
    body:
      'Layered detection across the agent surface. Sovereign primitives prevent autonomy drift while preserving auditability for compliance teams.',
    href: '#capabilities',
  },
];

export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative px-6 md:px-12 lg:px-16 py-20 md:py-28 hairline-t bg-bg-subtle overflow-hidden"
    >
      {/* Decorative amber wash */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 w-[600px] h-[600px] opacity-30 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(249,115,22,0.25) 0%, transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-container">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-12 md:mb-16 max-w-3xl">
            <span className="mono-label text-accent block mb-4">
              // SYSTEM MANIFESTO V4.2
            </span>
            <h2 className="font-display uppercase text-h2 md:text-h1 text-text-primary mb-6">
              Architect of Autonomy.
            </h2>
            <p className="font-sans text-body-lg text-text-secondary leading-relaxed">
              We don&rsquo;t build software. We engineer the autonomous systems
              where agents OBSERVE, DECIDE, and ACT on critical workloads —
              right next to a human-in-the-loop with sovereign oversight.
            </p>
          </div>
        </ScrollReveal>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 md:mb-20">
          {PILLARS.map((p, i) => (
            <ScrollReveal key={p.number} delay={i * 0.1}>
              <article className="group h-full bg-bg-card border border-hairline hover:border-accent transition-colors duration-300 p-8 flex flex-col">
                <div className="flex items-baseline justify-between mb-6">
                  <span className="mono-label text-accent">
                    MODULE {p.number} / {p.label}
                  </span>
                  <span className="font-display text-text-dim text-3xl leading-none opacity-50">
                    .{p.number}
                  </span>
                </div>
                <h3 className="font-display uppercase text-2xl md:text-3xl text-text-primary mb-4 group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
                <p className="font-sans text-body text-text-secondary leading-relaxed mb-6 flex-1">
                  {p.body}
                </p>
                <a
                  href={p.href}
                  className="mono-label text-text-muted hover:text-accent flex items-center gap-2 transition-colors mt-auto"
                >
                  ACCESS PROTOCOL
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 6h10m0 0L7 2m4 4L7 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Inline commission CTA */}
        <ScrollReveal>
          <div className="relative bg-bg-card border border-hairline-strong p-10 md:p-14 text-center overflow-hidden">
            <span className="mono-label text-accent block mb-4">
              // ENGAGEMENT ACCESS ONLY
            </span>
            <h3 className="font-display uppercase text-3xl md:text-5xl text-text-primary mb-8 max-w-3xl mx-auto">
              Commission Your Infrastructure With The Architects.
            </h3>
            <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="ENTER.EMAIL@DOMAIN"
                className="flex-1 px-4 py-3 bg-bg border border-hairline focus:border-accent text-text-primary font-mono text-sm placeholder:text-text-muted outline-none transition-colors"
                aria-label="Email"
              />
              <a
                href="mailto:mberanek@emberonix.com"
                className="btn-primary"
              >
                Request Consult
              </a>
            </form>
            <p className="mono-label text-text-muted mt-6">
              [HUMAN-IN-THE-LOOP REQUIRED]
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
