'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ScrollReveal } from './ScrollReveal';
import { EmberonixMonogram } from './EmberonixMonogram';

interface ProjectHeroProps {
  name: string;
  tagline: string;
  tags: string[];
  stats?: { label: string; value: string }[];
}

export function ProjectHero({ name, tagline, tags, stats }: ProjectHeroProps) {
  return (
    <section className="pt-32 md:pt-40 pb-16 md:pb-24">
      <div className="mx-auto max-w-container px-6 md:px-10">
        <ScrollReveal>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-small font-sans text-text-muted hover:text-accent transition-colors mb-8"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M13 7H3m0 0l4-4M3 7l4 4"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            All Projects
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
          <h1 className="font-serif text-display-sm md:text-display font-light text-text-primary mb-6">
            {name}
          </h1>
          <p className="font-sans text-body-lg md:text-h3 text-text-secondary max-w-3xl leading-relaxed mb-10">
            {tagline}
          </p>
        </ScrollReveal>

        {stats && (
          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap gap-8 md:gap-12 py-8 hairline-t hairline-b">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <span className="block font-serif text-h1 md:text-display-sm font-light text-accent">
                    {stat.value}
                  </span>
                  <span className="text-caption text-text-muted font-sans uppercase tracking-wider">
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
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-container px-6 md:px-10">
        <ScrollReveal delay={delay}>
          <div className="flex items-center gap-4 mb-4">
            <EmberonixMonogram size={16} className="text-text-muted opacity-50" />
            <span className="text-caption uppercase tracking-widest text-text-muted font-sans">
              {label}
            </span>
          </div>
          <h2 className="font-serif text-h1 md:text-h1 font-light text-text-primary mb-2">
            {title}
          </h2>
          <div className="accent-line mt-4 mb-10 md:mb-14" />
        </ScrollReveal>
        <ScrollReveal delay={delay + 0.05}>{children}</ScrollReveal>
      </div>
    </section>
  );
}

export function ProjectImageRow({ images }: { images: { src: string; alt: string }[] }) {
  return (
    <div className={`grid grid-cols-1 ${images.length > 1 ? 'md:grid-cols-2' : ''} gap-4 md:gap-6 my-8`}>
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
      <span className="font-serif text-h2 font-light text-accent opacity-50 shrink-0 w-12">
        {number}
      </span>
      <div>
        <h4 className="font-serif text-h3 font-light text-text-primary mb-2">{title}</h4>
        <p className="font-sans text-body text-text-secondary leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export function TechItem({ name, detail }: { name: string; detail: string }) {
  return (
    <div className="py-4 hairline-b last:border-0">
      <span className="font-sans text-body font-medium text-text-primary">{name}</span>
      <span className="font-sans text-body text-text-muted ml-2">— {detail}</span>
    </div>
  );
}
