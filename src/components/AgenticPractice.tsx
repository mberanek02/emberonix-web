'use client';

import Link from 'next/link';
import { ScrollReveal } from './ScrollReveal';

/* Production AI systems that live inside the products — surfaced here as
 * first-class agentic proof, independent of the consumer apps around them. */
const SYSTEMS = [
  {
    label: 'PRODUCTION SYSTEM / 01',
    name: 'Semantic Memory Engine',
    host: 'inside Memotive',
    body: 'An AI coach that never forgets a preference, restriction, or goal across sessions. Persistent semantic memory, vision-based meal analysis, intelligent model routing, and SSE-streamed chat on a FastAPI backend.',
    points: [
      'Multi-session semantic memory',
      'Intelligent model routing',
      'Vision-based macro extraction',
    ],
    href: '/projects/memotive/tech',
  },
  {
    label: 'PRODUCTION SYSTEM / 02',
    name: 'Rex — Tool-Calling Assistant',
    host: 'inside PropertyHQ',
    body: 'An agentic assistant embedded in a contractor SaaS platform: 17+ tools across estimates, scheduling, and invoicing, with confirm-before-act gates on anything that touches money or client data.',
    points: [
      '17+ tools across the platform',
      'Confirm-before-act approval gates',
      'Proactive insight generation',
    ],
    href: '/projects/propertyhq/tech',
  },
];

const ENGAGEMENT_POINTS = [
  'AI-insight dashboards — confidence-rated recommendations across catalog, orders, and channel health',
  'Sales-channel automation — from outdated-SKU detection to marketplace-ready update files',
  'Live demo platforms built for industry events and economic-development programs',
  'AI literacy training delivered to manufacturing teams on the shop floor and in the front office',
];

export function AgenticPractice() {
  return (
    <section
      id="agentic-work"
      className="px-6 md:px-12 lg:px-16 py-20 md:py-28 hairline-t bg-bg-subtle"
    >
      <div className="mx-auto max-w-container">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-12 md:mb-16 max-w-3xl">
            <span className="mono-label text-accent block mb-4">
              // 03 / AGENTIC ENGINEERING IN PRACTICE
            </span>
            <h2 className="font-display uppercase text-h2 md:text-h1 text-text-primary mb-4">
              AI that earns its keep.
            </h2>
            <p className="font-sans text-body text-text-secondary leading-relaxed">
              Consulting engagements and production systems
              <span className="text-accent"> ●</span> agents with real tools,
              real approval gates, real users<span className="text-accent"> ●</span> not
              demos, not chatbot wrappers.
            </p>
          </div>
        </ScrollReveal>

        {/* Consulting engagement — full width */}
        <ScrollReveal>
          <article className="glass-panel-amber border border-accent/30 hover:border-accent transition-colors duration-300 p-8 md:p-10 lg:p-12 mb-4 md:mb-6">
            <div className="flex flex-wrap items-baseline justify-between gap-3 mb-6">
              <span className="mono-label text-accent">
                CONSULTING ENGAGEMENT / ACTIVE 2026
              </span>
              <span className="tag-pill-amber">MANUFACTURING</span>
            </div>
            <h3 className="font-display uppercase text-3xl md:text-4xl text-text-primary mb-4 leading-[0.95]">
              Embedded AI Partner —
              <br className="hidden md:block" /> Manufacturing Consultancy
            </h3>
            <p className="font-sans text-body text-text-secondary leading-relaxed mb-8 max-w-3xl">
              Ongoing engagement as the engineering arm of a consultancy
              bringing practical AI to small and mid-size manufacturers — the
              shops that run American supply chains, not the ones with data
              science teams.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-8">
              {ENGAGEMENT_POINTS.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2 font-mono text-xs text-text-muted leading-relaxed"
                >
                  <span className="text-accent shrink-0">▸</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p className="mono-label text-text-muted">
              // CLIENT NAMES WITHHELD — REFERENCES AVAILABLE ON REQUEST
            </p>
          </article>
        </ScrollReveal>

        {/* Production systems — two cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {SYSTEMS.map((sys, i) => (
            <ScrollReveal key={sys.name} delay={i * 0.1}>
              <article className="group h-full bg-bg-card border border-hairline hover:border-accent transition-colors duration-300 p-8 md:p-10 flex flex-col">
                <div className="flex items-baseline justify-between mb-6">
                  <span className="mono-label text-accent">{sys.label}</span>
                  <span className="mono-label text-text-dim">{sys.host}</span>
                </div>
                <h3 className="font-display uppercase text-2xl md:text-3xl text-text-primary mb-4">
                  {sys.name}
                </h3>
                <p className="font-sans text-body text-text-secondary leading-relaxed mb-6 flex-1">
                  {sys.body}
                </p>
                <ul className="flex flex-col gap-1.5 mb-6">
                  {sys.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 font-mono text-xs text-text-muted"
                    >
                      <span className="text-accent shrink-0">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4 hairline-t">
                  <Link
                    href={sys.href}
                    className="mono-label text-accent hover:text-text-primary transition-colors"
                  >
                    BUILD NOTES
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Meta-proof */}
        <ScrollReveal delay={0.2}>
          <p className="mono-label text-text-muted text-center mt-10 max-w-3xl mx-auto leading-relaxed">
            // THE META-PROOF: EVERYTHING ON THIS PAGE — THREE PRODUCTS, TWO
            CLIENT SITES — WAS SHIPPED BY ONE ENGINEER RUNNING STRUCTURED
            AGENTIC WORKFLOWS.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
