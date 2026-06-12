'use client';

import { ScrollReveal } from './ScrollReveal';

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Discover',
    description:
      'Understand the problem, market, and constraints. Audit what exists. Define what success looks like.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Architecture, UX flows, and technical decisions. Fast prototyping. Validate before building.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Ship in tight cycles. Working software every sprint. Real users, real feedback, real progress.',
  },
  {
    number: '04',
    title: 'Iterate',
    description:
      'Go live with confidence. Measure what matters. Improve with data, not guesses.',
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="px-6 md:px-12 lg:px-16 py-20 md:py-28 hairline-t"
    >
      <div className="mx-auto max-w-container">
        <ScrollReveal>
          <div className="mb-12 md:mb-16">
            <span className="mono-label text-accent block mb-4">
              // 06 / PROCESS
            </span>
            <h2 className="font-display uppercase text-h2 md:text-h1 text-text-primary mb-4">
              How I Work
            </h2>
            <div className="accent-line" />
          </div>
        </ScrollReveal>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-hairline">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.1}>
              <div
                className={`p-6 md:p-8 h-full bg-bg-card relative ${
                  i < steps.length - 1
                    ? 'border-b lg:border-b-0 lg:border-r border-hairline'
                    : ''
                } ${i === 1 ? 'md:border-r-0 lg:border-r' : ''} ${
                  i === 0 || i === 1 ? 'md:border-r border-hairline' : ''
                }`}
              >
                <div className="flex items-baseline justify-between mb-4">
                  <span className="mono-label text-accent">
                    STEP {step.number}
                  </span>
                  <span className="font-display uppercase text-text-dim text-3xl opacity-40">
                    /{step.number}
                  </span>
                </div>

                <h3 className="font-display uppercase text-2xl text-text-primary mb-3">
                  {step.title}
                </h3>

                <p className="font-sans text-body text-text-secondary leading-relaxed">
                  {step.description}
                </p>

                {/* Connecting arrow */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-2.5 -translate-y-1/2 w-5 h-5 bg-bg-card border border-hairline items-center justify-center text-accent">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 6h8m0 0L7 3m3 3L7 9"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
