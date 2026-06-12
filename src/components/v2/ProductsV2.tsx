'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from '@/lib/gsapSetup';
import { projects } from '@/data/projects';

const PRODUCTS = projects.filter((p) => p.kind === 'product');

/* Own products as 3D-tilt artifact cards. */
function TiltCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || window.matchMedia('(pointer: coarse)').matches) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    gsap.to(el, {
      rotateY: px * 7,
      rotateX: -py * 7,
      transformPerspective: 900,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.9, ease: 'elastic.out(1, 0.5)' });
  };

  return (
    <div ref={ref} className={`will-change-transform ${className}`} onMouseMove={onMove} onMouseLeave={onLeave} style={{ transformStyle: 'preserve-3d' }}>
      {children}
    </div>
  );
}

export function ProductsV2() {
  return (
    <section id="products" className="relative px-6 md:px-10 py-24 md:py-36 bg-bg-subtle hairline-t">
      <div className="mx-auto max-w-[1680px]">
        <div className="mb-14 md:mb-20 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="mono-label text-accent block mb-4">// 04 / MY PRODUCTS — BUILT & SHIPPED SOLO</span>
            <h2 className="font-display uppercase text-h2 md:text-display-sm text-text-primary">
              What I build when
              <br />
              I&rsquo;m the <em className="hero-serif text-accent not-italic">client.</em>
            </h2>
          </div>
          <p className="font-sans text-body text-text-secondary max-w-sm leading-relaxed">
            Live in production with real users — conceived, designed,
            engineered, and shipped by one person.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {PRODUCTS.map((p, i) => (
            <TiltCard key={p.id} className="h-full">
              <article className="group relative h-full bg-bg-card border border-hairline hover:border-accent transition-colors duration-500 flex flex-col overflow-hidden">
                {/* Visual */}
                <div className="relative aspect-[16/11] overflow-hidden border-b border-hairline bg-bg-elevated flex items-center justify-center">
                  {p.image && p.imageStyle === 'icon' ? (
                    <div className="relative h-[68%] aspect-square transition-transform duration-700 group-hover:scale-105" style={{ transform: 'translateZ(40px)' }}>
                      <Image src={p.image} alt={`${p.name} icon`} fill className="object-contain rounded-[20%]" sizes="240px" />
                    </div>
                  ) : p.image ? (
                    <Image src={p.image} alt={`${p.name} screenshot`} fill className="object-cover object-top transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                  ) : null}
                  <span className="absolute top-4 left-5 mono-label text-accent">0{i + 1}</span>
                </div>

                {/* Body */}
                <div className="p-7 md:p-8 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tags.slice(0, 3).map((t) => (
                      <span key={t} className="tag-pill">{t}</span>
                    ))}
                  </div>
                  <h3 className="font-display uppercase text-2xl md:text-3xl text-text-primary mb-3">{p.name}</h3>
                  <p className="font-sans text-body text-text-secondary leading-relaxed flex-1 mb-6">{p.tagline}</p>
                  <div className="flex flex-wrap gap-x-5 gap-y-2 pt-4 hairline-t">
                    {p.caseStudyUrl && (
                      <Link href={p.caseStudyUrl} className="mono-label text-accent hover:text-accent-hover transition-colors" data-cursor="link">
                        CASE STUDY
                      </Link>
                    )}
                    {p.liveUrl && p.liveUrl !== '#' && (
                      <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="mono-label text-text-muted hover:text-text-primary transition-colors" data-cursor="link">
                        {p.liveUrl.includes('apple.com') ? 'APP STORE ↗' : 'LIVE ↗'}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
