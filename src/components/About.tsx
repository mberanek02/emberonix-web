'use client';

import Image from 'next/image';
import { ScrollReveal } from './ScrollReveal';
import { EmberonixMonogram } from './EmberonixMonogram';

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-bg-elevated">
      <div className="mx-auto max-w-container px-6 md:px-10">
        {/* Section header */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <EmberonixMonogram size={18} className="text-text-muted opacity-50" />
            <span className="text-caption uppercase tracking-widest text-text-muted font-sans">
              Who I Am
            </span>
          </div>
          <h2 className="font-serif text-h1 md:text-display-sm font-light text-text-primary mb-2">
            About
          </h2>
          <div className="accent-line mt-4 mb-16 md:mb-20" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Portrait */}
          <ScrollReveal className="lg:col-span-4">
            <div className="portrait-editorial relative aspect-[3/4] max-w-[320px] lg:max-w-none">
              <Image
                src="/images/Michael.png"
                alt="Portrait of the founder of Emberonix"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 320px, 33vw"
              />
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
              <p className="font-sans text-body text-text-secondary leading-relaxed mb-8">
                Whether it&rsquo;s a zero-to-one MVP, an agentic system wired into
                your product, or a GenAI pipeline for your marketing — I&rsquo;ll
                treat it like my own and ship it like it matters.
              </p>

              {/* Stats / proof points */}
              <div className="grid grid-cols-3 gap-6 pt-8 hairline-t">
                <div>
                  <span className="font-serif text-h2 font-light text-accent block mb-1">
                    10+
                  </span>
                  <span className="text-caption uppercase tracking-widest text-text-muted font-sans">
                    Products Shipped
                  </span>
                </div>
                <div>
                  <span className="font-serif text-h2 font-light text-accent block mb-1">
                    SaaS + iOS
                  </span>
                  <span className="text-caption uppercase tracking-widest text-text-muted font-sans">
                    Platforms
                  </span>
                </div>
                <div>
                  <span className="font-serif text-h2 font-light text-accent block mb-1">
                    Full Stack
                  </span>
                  <span className="text-caption uppercase tracking-widest text-text-muted font-sans">
                    Execution
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
