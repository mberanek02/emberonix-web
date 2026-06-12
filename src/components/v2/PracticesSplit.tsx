'use client';

import { useState } from 'react';

interface ServiceRow {
  title: string;
  pitch: string;
  tags: string[];
}

interface Lane {
  id: string;
  label: string;
  audience: string;
  blurb: string;
  cta: { label: string; href: string };
  rows: ServiceRow[];
  /** LOB color identity — blue for design, amber for agentic */
  tone: 'blue' | 'amber';
}

const LANES: Lane[] = [
  {
    id: 'design',
    label: 'Design & Build',
    audience: 'FOR BUSINESS OWNERS',
    blurb:
      'For the owner who needs something running, looking sharp, and converting — designed and engineered end-to-end by one accountable hand.',
    cta: { label: 'SEE CLIENT WORK', href: '#work' },
    tone: 'blue',
    rows: [
      {
        title: 'Custom websites with motion',
        pitch:
          'Bespoke marketing sites with the animation, interactivity, and polish this very page is built from. No templates. No page builders.',
        tags: ['Next.js', 'GSAP', 'WebGL'],
      },
      {
        title: 'SEO & getting found',
        pitch:
          'A beautiful site nobody finds is wasted money. Fast Core Web Vitals, clean semantic markup, local-business structured data, and proper meta tags — so Google and real customers actually find you.',
        tags: ['Local SEO', 'Core Web Vitals', 'Structured Data'],
      },
      {
        title: 'Conversion & lead capture',
        pitch:
          'Getting found is half the job. Contact and booking forms, click-to-call, Google Business and reviews, and analytics that show what works — so traffic turns into calls, bookings, and sales.',
        tags: ['Lead Forms', 'Google Business', 'Analytics'],
      },
      {
        title: 'E-commerce & catalogs',
        pitch:
          'Storefronts and product systems that convert — custom catalogs, filterable galleries, checkout flows that respect your margins.',
        tags: ['Storefronts', 'Catalogs', 'Stripe'],
      },
      {
        title: 'Native iOS apps',
        pitch:
          'SwiftUI apps from concept to App Store — onboarding, offline-first sync, payments, push. Three of mine are live right now.',
        tags: ['SwiftUI', 'App Store', 'Offline-first'],
      },
      {
        title: 'Brand & design systems',
        pitch:
          'Logo, type, color, and a component system — so everything you ship after launch still looks like you.',
        tags: ['Identity', 'Design Tokens', 'Guidelines'],
      },
      {
        title: 'Content & copy help',
        pitch:
          "Don't have the words or photos ready? You don't need to. I'll help shape the copy and source the imagery — so a blank page never stalls your launch.",
        tags: ['Copywriting', 'Imagery', 'Launch-ready'],
      },
      {
        title: 'Edit it yourself',
        pitch:
          'Update your own hours, prices, photos, and posts — no developer, no ticket, no waiting. You own your site and stay in control of it.',
        tags: ['Easy CMS', 'No-code edits', 'You own it'],
      },
      {
        title: 'Care after launch',
        pitch:
          'I set up hosting, domains, and email, keep everything running, and stay reachable for fixes and changes. One accountable person — your site never gets orphaned.',
        tags: ['Hosting', 'Ongoing fixes', 'Always reachable'],
      },
    ],
  },
  {
    id: 'agentic',
    label: 'Agentic AI',
    audience: 'FOR COMPANIES & TEAMS',
    blurb:
      'Production AI wired into your real stack — with approval gates, evals, and observability. Not a demo. Not a chatbot wrapper.',
    cta: { label: 'SEE THE SYSTEMS', href: '#systems' },
    tone: 'amber',
    rows: [
      {
        title: 'Custom AI agents',
        pitch:
          'Tool-using agents that act inside your systems — scheduling, invoicing, research — with confirm-before-act gates where money or data moves.',
        tags: ['Tool Use', 'Approval Gates', 'Multi-step'],
      },
      {
        title: 'RAG knowledge systems',
        pitch:
          'Your documents, manuals, and tribal knowledge turned into grounded, citable answers your team can actually trust.',
        tags: ['Embeddings', 'Vector Search', 'Citations'],
      },
      {
        title: 'Workflow automation',
        pitch:
          'The reports, handoffs, and busywork your team grinds through weekly — automated end-to-end with human checkpoints.',
        tags: ['Pipelines', 'Integrations', 'Human-in-loop'],
      },
      {
        title: 'LLM integration & routing',
        pitch:
          'The right model for each job — cost-aware routing, streaming UX, evals, and observability baked in from day one.',
        tags: ['Model Routing', 'Evals', 'Streaming'],
      },
      {
        title: 'AI dashboards & insights',
        pitch:
          'Confidence-rated recommendations on your real business data — built for operators, not data scientists.',
        tags: ['Insights', 'Confidence Scores', 'Operators'],
      },
      {
        title: 'Team training & enablement',
        pitch:
          'Hands-on AI literacy for your people — from the shop floor to the front office. I do this today for manufacturers.',
        tags: ['Workshops', 'Playbooks', 'Adoption'],
      },
    ],
  },
];

/* The services index: every offer as a row in a ledger.
 * Hover ignites a row; the lane headers carry the audience split. */
export function PracticesSplit() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="craft" className="relative px-6 md:px-10 py-24 md:py-36">
      <div className="mx-auto max-w-[1480px]">
        <div className="mb-16 md:mb-24 max-w-3xl">
          <span className="mono-label text-accent block mb-4">// 01 / SERVICES</span>
          <h2 className="font-display uppercase text-h2 md:text-display-sm text-text-primary">
            Everything I can
            <br />
            build for <em className="hero-serif text-accent not-italic">you.</em>
          </h2>
        </div>

        {LANES.map((lane, li) => {
          const toneText = lane.tone === 'blue' ? 'text-blue' : 'text-accent';
          return (
          <div key={lane.id} className={li > 0 ? 'mt-20 md:mt-28' : ''}>
            {/* Lane header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-10">
              <div>
                <span className={`mono-label ${toneText} block mb-3`}>
                  {`0${li + 1}`} — {lane.audience}
                </span>
                <h3 className="font-display uppercase text-3xl md:text-4xl text-text-primary">
                  {lane.label}
                </h3>
              </div>
              <div className="md:text-right max-w-md">
                <p className="font-sans text-body text-text-secondary leading-relaxed mb-3">{lane.blurb}</p>
                <a href={lane.cta.href} className={`mono-label ${toneText} hover:text-text-primary transition-colors`} data-cursor="link">
                  {lane.cta.label} →
                </a>
              </div>
            </div>

            {/* Service rows */}
            <div className="border-t border-hairline">
              {lane.rows.map((row, ri) => {
                const key = `${lane.id}-${ri}`;
                const isActive = active === key;
                return (
                  <div
                    key={key}
                    onMouseEnter={() => setActive(key)}
                    onMouseLeave={() => setActive(null)}
                    className="service-row group relative grid grid-cols-1 md:grid-cols-[3.5rem_minmax(0,1fr)_minmax(0,1.5fr)_26.5rem] items-baseline md:items-center gap-2 md:gap-8 py-6 md:py-8 px-2 md:px-4 border-b border-hairline transition-colors duration-300 hover:bg-bg-elevated/60"
                  >
                    <span className={`mono-label transition-colors duration-300 ${isActive ? toneText : 'text-text-dim'}`}>
                      {String(ri + 1).padStart(2, '0')}
                    </span>
                    <h4
                      className={`font-display uppercase text-2xl md:text-4xl transition-all duration-300 ${
                        isActive ? `${toneText} translate-x-2` : 'text-text-primary'
                      }`}
                    >
                      {row.title}
                    </h4>
                    <p className="font-sans text-small md:text-body text-text-secondary leading-relaxed md:max-w-xl">
                      {row.pitch}
                    </p>
                    <div className="hidden lg:flex flex-wrap gap-2 justify-end content-center">
                      {row.tags.map((t) => (
                        <span key={t} className="tag-pill">{t}</span>
                      ))}
                    </div>
                    <span
                      aria-hidden="true"
                      className={`hidden md:block absolute right-4 top-1/2 -translate-y-1/2 ${toneText} text-xl transition-all duration-300 lg:hidden ${
                        isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                      }`}
                    >
                      →
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          );
        })}

        <p className="mono-label text-text-muted text-center mt-14">
          // NEED BOTH? ENGAGEMENTS OFTEN SPAN THE TWO. ONE CONTRACT, ONE INVOICE.
        </p>
      </div>
    </section>
  );
}
