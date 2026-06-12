'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ScrollReveal } from './ScrollReveal';

interface ProjectHeroProps {
  name: string;
  tagline: string;
  tags: string[];
  stats?: { label: string; value: string }[];
}

export function ProjectHero({ name, tagline, tags, stats }: ProjectHeroProps) {
  return (
    <section className="pt-32 md:pt-40 pb-16 md:pb-24 hairline-b">
      <div className="mx-auto max-w-container px-6 md:px-12 lg:px-16">
        <ScrollReveal>
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 mono-label text-text-muted hover:text-accent transition-colors mb-10"
          >
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path
                d="M13 7H3m0 0l4-4M3 7l4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            ALL PROJECTS
          </Link>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span key={tag} className="tag-pill">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="font-display uppercase text-5xl md:text-7xl lg:text-display text-text-primary mb-6 leading-[0.95]">
            {name}
          </h1>
          <p className="font-sans text-body-lg md:text-2xl text-text-secondary max-w-3xl leading-relaxed mb-10">
            {tagline}
          </p>
        </ScrollReveal>

        {stats && (
          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap gap-8 md:gap-16 py-8 hairline-t hairline-b">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <span className="block font-display uppercase text-3xl md:text-5xl text-accent leading-none">
                    {stat.value}
                  </span>
                  <span className="mono-label text-text-muted mt-2 inline-block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}

export function ProjectSection({
  label,
  title,
  children,
  delay = 0,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <section className="py-16 md:py-24 hairline-b">
      <div className="mx-auto max-w-container px-6 md:px-12 lg:px-16">
        <ScrollReveal delay={delay}>
          <span className="mono-label text-accent block mb-4">
            // {label}
          </span>
          <h2 className="font-display uppercase text-3xl md:text-5xl text-text-primary mb-6">
            {title}
          </h2>
          <div className="accent-line mb-10 md:mb-14" />
        </ScrollReveal>
        <ScrollReveal delay={delay + 0.05}>{children}</ScrollReveal>
      </div>
    </section>
  );
}

export function ProjectImageRow({ images }: { images: { src: string; alt: string }[] }) {
  return (
    <div className={`grid grid-cols-1 ${images.length > 1 ? 'md:grid-cols-2' : ''} gap-4 my-8`}>
      {images.map((img) => (
        <div
          key={img.src}
          className="relative w-full aspect-video overflow-hidden border border-hairline"
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover object-top"
            sizes={images.length > 1 ? '(max-width: 768px) 100vw, 50vw' : '100vw'}
          />
        </div>
      ))}
    </div>
  );
}

export function AgenticStep({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-6 py-6 hairline-b last:border-0">
      <span className="font-display uppercase text-3xl text-accent shrink-0 w-12 leading-none">
        {number}
      </span>
      <div>
        <h4 className="font-display uppercase text-xl md:text-2xl text-text-primary mb-2">{title}</h4>
        <p className="font-sans text-body text-text-secondary leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export function TechItem({ name, detail }: { name: string; detail: string }) {
  return (
    <div className="py-4 hairline-b last:border-0">
      <span className="font-mono text-sm font-bold text-accent uppercase tracking-wider">{name}</span>
      <span className="font-sans text-body text-text-secondary ml-2">— {detail}</span>
    </div>
  );
}
