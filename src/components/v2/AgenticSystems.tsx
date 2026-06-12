'use client';

import { useLayoutEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from '@/lib/gsapSetup';

const STATS = [
  { value: 20, suffix: '+', label: 'YEARS ENGINEERING' },
  { value: 5, suffix: '', label: 'PROJECTS SHIPPED' },
  { value: 3, suffix: '', label: 'PRODUCTS IN PRODUCTION' },
  { value: 17, suffix: '+', label: 'TOOLS ON ONE AGENT' },
];

const SYSTEMS = [
  {
    label: 'CONSULTING ENGAGEMENT / ACTIVE 2026',
    tag: 'MANUFACTURING',
    name: 'Embedded AI Partner',
    body: 'Engineering arm of a consultancy bringing practical AI to small and mid-size manufacturers: confidence-rated insight dashboards, sales-channel automation, demo platforms, and AI training on the shop floor.',
    points: ['AI-insight dashboards', 'Channel automation', 'AI literacy training'],
    footer: '// CLIENT NAMES WITHHELD — REFERENCES ON REQUEST',
  },
  {
    label: 'PRODUCTION SYSTEM / MEMOTIVE',
    tag: 'iOS + FASTAPI',
    name: 'Semantic Memory Engine',
    body: 'An AI coach that never forgets a preference, restriction, or goal. Persistent multi-session memory, vision-based meal analysis, intelligent model routing, SSE-streamed chat.',
    points: ['Multi-session memory', 'Model routing', 'Vision extraction'],
    href: '/projects/memotive/tech',
  },
  {
    label: 'PRODUCTION SYSTEM / PROPERTYHQ',
    tag: 'NEXT.JS SAAS',
    name: 'Rex — Tool-Calling Agent',
    body: 'An agentic assistant embedded in contractor SaaS: 17+ tools across estimates, scheduling, and invoicing — with confirm-before-act gates on anything touching money or client data.',
    points: ['17+ platform tools', 'Confirm-before-act gates', 'Proactive insights'],
    href: '/projects/propertyhq/tech',
  },
];

/* The agentic practice: terminal-flavored sticky intro, count-up stats,
 * and system cards that ignite on scroll. */
export function AgenticSystems() {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // Count-up stats
      gsap.utils.toArray<HTMLElement>('.stat-value').forEach((el) => {
        const end = Number(el.dataset.value ?? 0);
        if (reduced) {
          el.textContent = String(end);
          return;
        }
        const counter = { v: 0 };
        gsap.to(counter, {
          v: end,
          duration: 1.6,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          onUpdate: () => { el.textContent = String(Math.round(counter.v)); },
        });
      });

      if (reduced) return;

      // Cards rise + ignite
      gsap.utils.toArray<HTMLElement>('.system-card').forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 64, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            delay: (i % 3) * 0.08,
            scrollTrigger: { trigger: card, start: 'top 88%', once: true },
          },
        );
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} id="systems" className="relative px-6 md:px-10 py-24 md:py-36 overflow-hidden">
      {/* Ambient ember wash */}
      <div
        aria-hidden="true"
        className="absolute -top-40 -right-40 w-[700px] h-[700px] opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.3) 0%, transparent 60%)' }}
      />

      <div className="mx-auto max-w-[1680px] relative">
        <div className="max-w-3xl mb-14 md:mb-20">
          <span className="mono-label text-accent block mb-4">// 03 / AGENTIC ENGINEERING IN PRACTICE</span>
          <h2 className="font-display uppercase text-h2 md:text-display-sm text-text-primary mb-6">
            AI that earns
            <br />
            its <em className="hero-serif text-accent not-italic">keep.</em>
          </h2>
          <p className="font-sans text-body-lg text-text-secondary leading-relaxed max-w-xl">
            Consulting engagements and production systems — tool-using agents,
            RAG knowledge pipelines, workflow automation. Real approval gates,
            real users. Not demos. Not chatbot wrappers.
          </p>
        </div>

        {/* Stats band */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-hairline mb-14 md:mb-20 border border-hairline">
          {STATS.map((s) => (
            <div key={s.label} className="bg-bg p-6 md:p-8">
              <span className="font-display text-5xl md:text-6xl text-accent leading-none">
                <span className="stat-value" data-value={s.value}>0</span>
                {s.suffix}
              </span>
              <span className="mono-label text-text-muted block mt-3">{s.label}</span>
            </div>
          ))}
        </div>

        {/* System cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5">
          {SYSTEMS.map((sys) => (
            <article
              key={sys.name}
              className="system-card group relative border border-hairline hover:border-accent bg-bg-card p-8 md:p-9 flex flex-col transition-colors duration-500 overflow-hidden"
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="flex items-center justify-between gap-3 mb-7 flex-wrap">
                <span className="mono-label text-accent">{sys.label}</span>
                <span className="tag-pill">{sys.tag}</span>
              </div>
              <h3 className="font-display uppercase text-2xl md:text-3xl text-text-primary mb-4">{sys.name}</h3>
              <p className="font-sans text-body text-text-secondary leading-relaxed mb-6 flex-1">{sys.body}</p>
              <ul className="flex flex-col gap-1.5 mb-6">
                {sys.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 font-mono text-xs text-text-muted">
                    <span className="text-accent shrink-0">▸</span>
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-4 hairline-t">
                {sys.href ? (
                  <Link href={sys.href} className="mono-label text-accent group-hover:text-accent-hover transition-colors" data-cursor="link">
                    BUILD NOTES →
                  </Link>
                ) : (
                  <span className="mono-label text-text-dim">{sys.footer}</span>
                )}
              </div>
            </article>
          ))}
        </div>

        <p className="mono-label text-text-muted text-center mt-12 md:mt-16 max-w-3xl mx-auto leading-relaxed">
          // THE META-PROOF: THIS ENTIRE PORTFOLIO — THREE PRODUCTS, TWO CLIENT SITES, AND THIS SITE —
          WAS SHIPPED BY ONE ENGINEER RUNNING STRUCTURED AGENTIC WORKFLOWS.
        </p>
      </div>
    </section>
  );
}
