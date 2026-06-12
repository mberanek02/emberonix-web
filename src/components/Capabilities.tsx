'use client';

import { ScrollReveal } from './ScrollReveal';

interface LOB {
  number: string;
  /** mono label color cue (the LOB color identity) */
  family: 'amber' | 'blue';
  audience: string;
  title: string;
  tagline: string;
  description: string;
  items: string[];
  ctaLabel: string;
  ctaHref: string;
}

const LOBS: LOB[] = [
  {
    number: '01',
    family: 'blue',
    audience: 'FOR BUSINESS OWNERS',
    title: 'Design-Forward Web & Apps',
    tagline: 'A website that makes your business impossible to ignore.',
    description:
      'For the owner who just needs something running, looking sharp, and converting. Custom-built marketing sites, e-commerce, native iOS — designed and engineered end-to-end by a single accountable hand. No agency overhead, no templates.',
    items: ['Marketing Sites', 'E-commerce', 'iOS / SwiftUI', 'Brand Identity', 'Custom CMS'],
    ctaLabel: 'SEE CLIENT WORK',
    ctaHref: '#client-work',
  },
  {
    number: '02',
    family: 'amber',
    audience: 'FOR COMPANIES & TECHNICAL TEAMS',
    title: 'Agentic Engineering',
    tagline: 'AI automation that actually works in production.',
    description:
      'Plan-apply-unify cycles, contract-driven steps, human approval gates. AI copilots, autonomous workflows, and RAG pipelines wired into your real stack — not duct-taped to a chatbot.',
    items: ['AI Agents', 'Workflow Automation', 'RAG Pipelines', 'LLM Integration', 'Full-Stack SaaS'],
    ctaLabel: 'SEE IT IN PRACTICE',
    ctaHref: '#agentic-work',
  },
];

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="px-6 md:px-12 lg:px-16 py-20 md:py-28 bg-bg-subtle hairline-t"
    >
      <div className="mx-auto max-w-container">
        {/* Section header */}
        <ScrollReveal>
          <div className="mb-12 md:mb-16 max-w-3xl">
            <span className="mono-label text-accent block mb-4">
              // 01 / WHAT I DO
            </span>
            <h2 className="font-display uppercase text-h2 md:text-h1 text-text-primary mb-6">
              Two practices.
              <br />
              One operator.
            </h2>
            <p className="font-sans text-body-lg text-text-secondary leading-relaxed">
              I work across two distinct lines — exciting, designed websites
              for businesses that need to stand out, and agentic AI systems
              for companies that need automation to actually work. Pick your
              lane below; the proof for each follows.
            </p>
          </div>
        </ScrollReveal>

        {/* Two big LOB cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {LOBS.map((lob, i) => {
            const isAmber = lob.family === 'amber';
            const familyClasses = isAmber
              ? {
                  border: 'border-accent/30 hover:border-accent',
                  text: 'text-accent',
                  pill: 'tag-pill-amber',
                  bg: 'glass-panel-amber',
                  ctaHover: 'hover:text-accent-bright',
                }
              : {
                  border: 'border-blue/30 hover:border-blue',
                  text: 'text-blue',
                  pill: 'tag-pill-blue',
                  bg: 'glass-panel-blue',
                  ctaHover: 'hover:text-blue',
                };

            return (
              <ScrollReveal key={lob.number} delay={i * 0.1}>
                <article
                  className={`group relative h-full ${familyClasses.bg} ${familyClasses.border} border p-8 md:p-10 lg:p-12 flex flex-col transition-colors duration-300 overflow-hidden`}
                >
                  {/* Top row — module index + audience */}
                  <div className="flex items-baseline justify-between mb-6">
                    <span className={`mono-label ${familyClasses.text}`}>
                      MODULE {lob.number} / {lob.audience}
                    </span>
                    <span className="font-display text-text-dim text-4xl opacity-40 leading-none">
                      .{lob.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display uppercase text-3xl md:text-4xl lg:text-5xl text-text-primary mb-4 leading-[0.95]">
                    {lob.title}
                  </h3>

                  {/* Tagline */}
                  <p className={`font-sans text-body-lg ${familyClasses.text} mb-6 leading-snug`}>
                    {lob.tagline}
                  </p>

                  {/* Description */}
                  <p className="font-sans text-body text-text-secondary leading-relaxed mb-6">
                    {lob.description}
                  </p>

                  {/* Capability chips */}
                  <ul className="flex flex-wrap gap-2 mb-8">
                    {lob.items.map((item) => (
                      <li key={item} className={familyClasses.pill}>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={lob.ctaHref}
                    className={`mono-label ${familyClasses.text} ${familyClasses.ctaHover} inline-flex items-center gap-2 mt-auto transition-colors`}
                  >
                    {lob.ctaLabel}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M1 6h10m0 0L7 2m4 4L7 10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>

                  {/* Decorative corner glow */}
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-24 -right-24 w-[380px] h-[380px] rounded-full opacity-25 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: isAmber
                        ? 'radial-gradient(circle, rgba(249,115,22,0.45) 0%, transparent 60%)'
                        : 'radial-gradient(circle, rgba(59,130,246,0.45) 0%, transparent 60%)',
                    }}
                  />
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Closing nuance line */}
        <ScrollReveal delay={0.2}>
          <p className="mono-label text-text-muted text-center mt-10 max-w-2xl mx-auto">
            // NEED BOTH? ENGAGEMENTS OFTEN SPAN THE TWO. ONE CONTRACT, ONE INVOICE.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
