'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from '@/lib/gsapSetup';
import { projects } from '@/data/projects';
import { Magnetic } from './Magnetic';

const CLIENTS = projects.filter((p) => p.kind === 'client');
const ROTATE_MS = 6000;

/* Client work as a browser-stage showcase: one big browser window holds
 * the active site; a selector rail switches clients with a crossfade.
 * Auto-rotates until the visitor takes the wheel. Blue = the design LOB. */
export function WorkGallery() {
  const rootRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = CLIENTS[active];

  // Auto-rotate, paused while the visitor hovers the showcase
  useEffect(() => {
    if (paused || CLIENTS.length < 2) return;
    const id = setInterval(() => setActive((a) => (a + 1) % CLIENTS.length), ROTATE_MS);
    return () => clearInterval(id);
  }, [paused]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) return;
      gsap.fromTo(
        '.stage-rise',
        { y: 56, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: { trigger: rootRef.current, start: 'top 70%', once: true },
        },
      );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} id="work" className="relative px-6 md:px-10 py-24 md:py-36 bg-bg-subtle hairline-t overflow-hidden">
      {/* Cool ambient wash — this is the blue practice */}
      <div
        aria-hidden="true"
        className="absolute -top-40 -left-40 w-[700px] h-[700px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 60%)' }}
      />

      <div className="mx-auto max-w-[1480px] relative">
        {/* Header */}
        <div className="mb-14 md:mb-20 max-w-3xl">
          <span className="mono-label text-blue block mb-4">// 02 / CLIENT WORK — WEB DESIGN & BUILD</span>
          <h2 className="font-display uppercase text-h2 md:text-display-sm text-text-primary">
            Built for clients.
            <br />
            <em className="hero-serif text-blue not-italic">Designed to convert.</em>
          </h2>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Selector rail */}
          <div className="stage-rise lg:col-span-4 flex flex-col order-2 lg:order-1">
            {CLIENTS.map((p, i) => {
              const isActive = i === active;
              return (
                <button
                  key={p.id}
                  onClick={() => setActive(i)}
                  className={`group text-left border-l-2 pl-6 py-6 transition-all duration-400 ${
                    isActive ? 'border-blue bg-bg-elevated/50' : 'border-hairline hover:border-text-muted'
                  }`}
                  aria-pressed={isActive}
                >
                  <span className={`mono-label block mb-2 transition-colors ${isActive ? 'text-blue' : 'text-text-dim'}`}>
                    0{i + 1} {isActive && <span className="ml-2">●</span>}
                  </span>
                  <span
                    className={`font-display uppercase text-2xl md:text-3xl block leading-none mb-2 transition-colors ${
                      isActive ? 'text-text-primary' : 'text-text-muted group-hover:text-text-secondary'
                    }`}
                  >
                    {p.name}
                  </span>
                  <span className={`font-sans text-small block leading-relaxed transition-all duration-400 ${
                    isActive ? 'text-text-secondary' : 'text-text-dim lg:opacity-60'
                  }`}>
                    {p.tagline}
                  </span>
                  {isActive && (
                    <span className="flex flex-wrap gap-1.5 mt-4">
                      {p.tags.slice(0, 3).map((t) => (
                        <span key={t} className="tag-pill-blue">{t}</span>
                      ))}
                    </span>
                  )}
                </button>
              );
            })}

            {/* Progress hairline */}
            <div className="hidden lg:block h-px bg-hairline mt-8 relative overflow-hidden">
              <div
                key={`${active}-${paused}`}
                className="absolute inset-y-0 left-0 bg-blue"
                style={
                  paused
                    ? { width: '0%' }
                    : { animation: `stageProgress ${ROTATE_MS}ms linear forwards` }
                }
              />
            </div>
          </div>

          {/* Browser stage */}
          <div className="stage-rise lg:col-span-8 order-1 lg:order-2">
            <a
              href={current.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="view"
              data-cursor-label="VISIT ↗"
              className="group block border border-hairline hover:border-blue transition-colors duration-500 bg-bg-card"
            >
              {/* Chrome bar */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-hairline bg-bg-elevated">
                <span className="flex gap-1.5" aria-hidden="true">
                  <span className="w-2.5 h-2.5 rounded-full bg-text-dim/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-text-dim/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-blue/70" />
                </span>
                <span className="flex-1 mx-2 px-3 py-1 bg-bg/80 border border-hairline font-mono text-[11px] text-text-muted truncate">
                  {current.liveUrl.replace('https://', '')}
                </span>
                <span className="mono-label text-blue hidden md:block group-hover:text-text-primary transition-colors">
                  LIVE SITE ↗
                </span>
              </div>

              {/* Viewport — all screenshots stacked, active crossfades in */}
              <div className="relative aspect-[16/10] overflow-hidden">
                {CLIENTS.map((p, i) => (
                  <div
                    key={p.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                      i === active ? 'opacity-100' : 'opacity-0'
                    }`}
                    aria-hidden={i !== active}
                  >
                    {p.image && (
                      <Image
                        src={p.image}
                        alt={`${p.name} website`}
                        fill
                        className={`object-cover object-top transition-transform duration-700 ${
                          i === active ? 'scale-100' : 'scale-[1.03]'
                        } group-hover:scale-[1.015]`}
                        sizes="(max-width: 1024px) 100vw, 62vw"
                      />
                    )}
                  </div>
                ))}
              </div>
            </a>

            {/* Stat strip under the stage */}
            {current.stats && (
              <div className="hidden md:grid grid-cols-3 gap-px bg-hairline border border-hairline border-t-0">
                {current.stats.slice(0, 3).map((s) => (
                  <div key={s.value} className="bg-bg-card px-5 py-4">
                    <span className="font-mono text-xs text-text-muted leading-relaxed flex items-start gap-2">
                      <span className="text-blue shrink-0">▸</span>
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Outcome + scope narrative — surfaced from project data */}
            {current.outcome && (
              <p className="font-sans text-body-lg text-blue leading-snug mt-6">
                {current.outcome}
              </p>
            )}
            {current.description && (
              <p className="font-sans text-body text-text-secondary leading-relaxed mt-3 max-w-2xl">
                {current.description}
              </p>
            )}
          </div>
        </div>

        {/* The pitch strip */}
        <div className="stage-rise relative mt-16 md:mt-24 border border-blue/30 overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ background: 'radial-gradient(80% 120% at 85% 100%, rgba(59,130,246,0.14) 0%, transparent 60%)' }}
          />
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8 p-10 md:p-14">
            <div>
              <span className="mono-label text-blue block mb-4">NEXT SLOT OPEN</span>
              <h3 className="font-display uppercase text-4xl md:text-5xl text-text-primary leading-[0.95]">
                Your site belongs <em className="hero-serif text-blue not-italic">here.</em>
              </h3>
            </div>
            <Magnetic>
              <a href="#contact" className="btn-primary shrink-0" data-cursor="link">
                Claim the Slot
              </a>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}
