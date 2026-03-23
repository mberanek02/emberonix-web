'use client';

import { ScrollReveal } from './ScrollReveal';
import { EmberonixMonogram } from './EmberonixMonogram';

interface Capability {
  number: string;
  title: string;
  description: string;
  items: string[];
}

const capabilities: Capability[] = [
  {
    number: '01',
    title: 'Product Engineering',
    description:
      'Full-stack SaaS and native iOS applications — designed, built, and shipped. From zero-to-one MVPs to scaling existing products.',
    items: ['SaaS Platforms', 'iOS / Swift', 'Full-Stack Development', 'API Design'],
  },
  {
    number: '02',
    title: 'Agentic Systems',
    description:
      'Intelligent automation that actually works. Copilots, autonomous workflows, and RAG pipelines integrated into real products.',
    items: ['AI Agents', 'RAG Pipelines', 'Workflow Automation', 'LLM Integration'],
  },
  {
    number: '03',
    title: 'GenAI for Growth',
    description:
      'AI-powered creative systems for product marketing. Content pipelines, asset generation, and distribution — not an agency, a system.',
    items: ['Content Systems', 'Asset Generation', 'Marketing Automation', 'Creative AI'],
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="py-24 md:py-32 bg-bg-elevated">
      <div className="mx-auto max-w-container px-6 md:px-10">
        {/* Section header */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <EmberonixMonogram size={18} className="text-text-muted opacity-50" />
            <span className="text-caption uppercase tracking-widest text-text-muted font-sans">
              What I Do
            </span>
          </div>
          <h2 className="font-serif text-h1 md:text-display-sm font-light text-text-primary mb-2">
            Capabilities
          </h2>
          <div className="accent-line mt-4 mb-16 md:mb-20" />
        </ScrollReveal>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {capabilities.map((cap, i) => (
            <ScrollReveal key={cap.number} delay={i * 0.1}>
              <div
                className={`py-8 md:py-0 md:px-8 lg:px-10 ${
                  i < capabilities.length - 1
                    ? 'hairline-b md:border-b-0 md:hairline-r'
                    : ''
                } ${i === 0 ? 'md:pl-0' : ''} ${
                  i === capabilities.length - 1 ? 'md:pr-0' : ''
                }`}
              >
                {/* Number */}
                <span className="font-serif text-display-sm font-light text-accent opacity-25 block mb-6">
                  {cap.number}
                </span>

                {/* Title */}
                <h3 className="font-serif text-h2 font-light text-text-primary mb-4">
                  {cap.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-body text-text-secondary leading-relaxed mb-6">
                  {cap.description}
                </p>

                {/* Items */}
                <ul className="flex flex-wrap gap-2">
                  {cap.items.map((item) => (
                    <li key={item} className="tag-pill">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
