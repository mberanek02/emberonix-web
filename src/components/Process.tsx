'use client';

import { ScrollReveal } from './ScrollReveal';
import { EmberonixMonogram } from './EmberonixMonogram';

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
    title: 'Launch & Iterate',
    description:
      'Go live with confidence. Measure what matters. Improve with data, not guesses.',
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="mx-auto max-w-container px-6 md:px-10">
        {/* Section header */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <EmberonixMonogram size={18} className="text-text-muted opacity-50" />
            <span className="text-caption uppercase tracking-widest text-text-muted font-sans">
              How I Work
            </span>
          </div>
          <h2 className="font-serif text-h1 md:text-display-sm font-light text-text-primary mb-2">
            Process
          </h2>
          <div className="accent-line mt-4 mb-16 md:mb-20" />
        </ScrollReveal>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.1}>
              <div
                className={`relative py-8 md:py-0 md:px-6 lg:px-8 ${
                  i < steps.length - 1
                    ? 'hairline-b md:border-b-0 md:hairline-r'
                    : ''
                } ${i === 0 ? 'md:pl-0' : ''} ${
                  i === steps.length - 1 ? 'md:pr-0' : ''
                }`}
              >
                {/* Step number */}
                <span className="text-caption uppercase tracking-widest text-accent font-sans font-medium block mb-4">
                  Step {step.number}
                </span>

                {/* Title */}
                <h3 className="font-serif text-h2 font-light text-text-primary mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-body text-text-secondary leading-relaxed">
                  {step.description}
                </p>

                {/* Connecting arrow (desktop only) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 -translate-y-1/2 text-text-muted opacity-30">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M2 6h8m0 0L7 3m3 3L7 9"
                        stroke="currentColor"
                        strokeWidth="1"
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
