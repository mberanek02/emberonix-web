'use client';

import Image from 'next/image';
import { ScrollReveal } from './ScrollReveal';

export function About() {
  return (
    <section
      id="about"
      className="px-6 md:px-12 lg:px-16 py-20 md:py-28 hairline-t"
    >
      <div className="mx-auto max-w-container">
        {/* Section header */}
        <ScrollReveal>
          <div className="mb-12 md:mb-16">
            <span className="mono-label text-accent block mb-4">
              // 08 / OPERATOR
            </span>
            <h2 className="font-display uppercase text-h2 md:text-h1 text-text-primary mb-4">
              The Architect
            </h2>
            <div className="accent-line" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Portrait */}
          <ScrollReveal className="lg:col-span-4">
            <div className="relative">
              <div className="portrait-editorial relative aspect-[3/4] max-w-[360px] lg:max-w-none border border-hairline">
                <Image
                  src="/images/Michael.png"
                  alt="Portrait of the founder of Emberonix"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 360px, 33vw"
                />
                {/* status overlay */}
                <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1.5 bg-bg/80 backdrop-blur-sm border border-hairline-strong">
                  <span className="status-dot" />
                  <span className="mono-label text-text-secondary">
                    OPERATOR · ONLINE
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Bio */}
          <ScrollReveal delay={0.15} className="lg:col-span-7 lg:col-start-6">
            <div className="max-w-xl">
              <p className="font-sans text-body-lg text-text-primary leading-relaxed mb-6">
                I&rsquo;m an experienced product engineer who builds and ships
                real software. Not decks. Not wireframes that never become code.
                Working products that solve problems and reach users.
              </p>
              <p className="font-sans text-body text-text-secondary leading-relaxed mb-6">
                My work spans the full stack — from system architecture and AI
                integration to polished UI and App Store submissions. I work best
                with founders and small teams who move fast and care about craft.
              </p>
              <p className="font-sans text-body text-text-secondary leading-relaxed mb-10">
                Whether it&rsquo;s a zero-to-one MVP, an agentic system wired into
                your product, or a GenAI pipeline for your marketing — I&rsquo;ll
                treat it like my own and ship it like it matters.
              </p>

              {/* Stats / proof points */}
              <div className="grid grid-cols-3 gap-4 border-t border-hairline pt-8">
                {[
                  { v: '10+', l: 'Products Shipped' },
                  { v: 'SaaS+iOS', l: 'Platforms' },
                  { v: 'FULL', l: 'Stack Execution' },
                ].map((s) => (
                  <div key={s.l}>
                    <span className="font-display uppercase text-3xl md:text-4xl text-accent block mb-1 leading-none">
                      {s.v}
                    </span>
                    <span className="mono-label text-text-muted">
                      {s.l}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
