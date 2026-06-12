'use client';

import { useState, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollReveal } from './ScrollReveal';
import { projects, type Project } from '@/data/projects';

/* ─── LOB family styling ─── */
function family(lob: Project['lob']) {
  if (lob === 'design') {
    return {
      label: 'DESIGN',
      text: 'text-blue',
      hover: 'hover:border-blue',
      pill: 'tag-pill-blue',
      gradient:
        'radial-gradient(circle at 70% 30%, rgba(59,130,246,0.25) 0%, transparent 60%)',
    };
  }
  return {
    label: 'AGENTIC',
    text: 'text-accent',
    hover: 'hover:border-accent',
    pill: 'tag-pill-amber',
    gradient:
      'radial-gradient(circle at 70% 30%, rgba(249,115,22,0.25) 0%, transparent 60%)',
  };
}

/* ─── Typographic fallback (used when no image OR image fails to load) ─── */
function TypoFallback({ project, f }: { project: Project; f: ReturnType<typeof family> }) {
  return (
    <div
      className="relative w-full aspect-[16/10] bg-bg-subtle border-b border-hairline overflow-hidden flex items-center justify-center"
      aria-hidden="true"
    >
      <div className="absolute inset-0 opacity-60" style={{ background: f.gradient }} />
      <span
        className={`relative font-display uppercase text-4xl md:text-5xl ${f.text} opacity-90 tracking-tight px-6 text-center leading-none`}
      >
        {project.name}
      </span>
    </div>
  );
}

/* ─── Uniform project card ─── */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const shouldReduce = useReducedMotion();
  const f = family(project.lob);
  const [imageBroken, setImageBroken] = useState(false);

  const hasUsableImage = !!project.image && !imageBroken;

  return (
    <ScrollReveal delay={(index % 2) * 0.06}>
      <motion.article
        whileHover={shouldReduce ? {} : { y: -2 }}
        transition={{ duration: 0.25 }}
        className={`group relative flex flex-col h-full bg-bg-card border border-hairline ${f.hover} transition-colors duration-300`}
      >
        {/* Image OR typographic fallback */}
        {hasUsableImage && project.imageStyle === 'icon' ? (
          <div className="relative flex items-center justify-center w-full aspect-[16/10] bg-bg-subtle border-b border-hairline p-6 md:p-8 overflow-hidden">
            {project.pulse && (
              <div
                aria-hidden="true"
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div className="w-[55%] aspect-square rounded-full icon-halo" />
              </div>
            )}
            <div
              className={`relative h-full aspect-square ${
                project.pulse ? 'icon-pulse' : ''
              }`}
            >
              <Image
                src={project.image as string}
                alt={`${project.name} app icon`}
                fill
                className="object-contain rounded-[22%]"
                sizes="200px"
                onError={() => setImageBroken(true)}
              />
            </div>
          </div>
        ) : hasUsableImage ? (
          <div className="relative w-full aspect-[16/10] overflow-hidden border-b border-hairline">
            <Image
              src={project.image as string}
              alt={`${project.name} screenshot`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
              onError={() => setImageBroken(true)}
            />
          </div>
        ) : (
          <TypoFallback project={project} f={f} />
        )}

        {/* Body */}
        <div className="flex flex-col flex-1 p-6 md:p-8">
          {/* Top meta */}
          <div className="flex items-start justify-between mb-5 gap-3">
            <span className={`mono-label ${f.text}`}>
              0{index + 1} / {f.label}
            </span>
            <div className="flex flex-wrap gap-1.5 justify-end">
              {project.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <h3 className="font-display uppercase text-2xl md:text-3xl text-text-primary mb-3 group-hover:text-text-primary transition-colors">
            {project.name}
          </h3>
          <p className="font-sans text-body text-text-secondary leading-relaxed flex-1 mb-6">
            {project.tagline}
          </p>

          {/* Stats */}
          {project.stats && project.stats.length > 0 && (
            <ul className="flex flex-col gap-1.5 mb-6">
              {project.stats.slice(0, 3).map((stat) => (
                <li
                  key={stat.value}
                  className="flex items-start gap-2 font-mono text-xs text-text-muted"
                >
                  <span className={`${f.text} shrink-0`}>▸</span>
                  <span>{stat.value}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Links */}
          <div className="flex flex-wrap gap-x-4 gap-y-2 mt-auto pt-4 hairline-t">
            {project.caseStudyUrl && (
              <Link
                href={project.caseStudyUrl}
                className={`mono-label ${f.text} hover:text-text-primary transition-colors`}
              >
                CASE STUDY
              </Link>
            )}
            {project.techUrl && (
              <Link
                href={project.techUrl}
                className="mono-label text-text-muted hover:text-text-secondary transition-colors"
              >
                BUILD NOTES
              </Link>
            )}
            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mono-label text-text-muted hover:text-text-secondary transition-colors"
              >
                {project.liveUrl.includes('apple.com') ? 'APP STORE ↗' : 'LIVE SITE ↗'}
              </a>
            )}
          </div>
        </div>

        {/* Hover corner accent */}
        <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div
            className={`absolute top-0 right-0 w-px h-8 ${
              project.lob === 'design' ? 'bg-blue' : 'bg-accent'
            }`}
          />
          <div
            className={`absolute top-0 right-0 h-px w-8 ${
              project.lob === 'design' ? 'bg-blue' : 'bg-accent'
            }`}
          />
        </div>
      </motion.article>
    </ScrollReveal>
  );
}

/* ─── Shared work-section shell ─── */
interface WorkSectionProps {
  id: string;
  label: string;
  labelClass: string;
  heading: ReactNode;
  intro: ReactNode;
  items: Project[];
  subtle?: boolean;
}

function WorkSection({ id, label, labelClass, heading, intro, items, subtle }: WorkSectionProps) {
  return (
    <section
      id={id}
      className={`px-6 md:px-12 lg:px-16 py-20 md:py-28 hairline-t ${subtle ? 'bg-bg-subtle' : ''}`}
    >
      <div className="mx-auto max-w-container">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-12 md:mb-16 max-w-3xl">
            <span className={`mono-label ${labelClass} block mb-4`}>{label}</span>
            <h2 className="font-display uppercase text-h2 md:text-h1 text-text-primary mb-4">
              {heading}
            </h2>
            <p className="font-sans text-body text-text-secondary leading-relaxed">
              {intro}
            </p>
          </div>
        </ScrollReveal>

        {/* Uniform 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {items.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Client Work — the web design sales pitch ─── */
export function ClientWork() {
  return (
    <WorkSection
      id="client-work"
      label="// 02 / CLIENT WORK — WEB DESIGN & BUILD"
      labelClass="text-blue"
      heading={
        <>
          Sites that make small
          <br />
          businesses look big.
        </>
      }
      intro={
        <>
          Designed, built, and shipped end-to-end for real business owners
          <span className="text-blue"> ●</span> no agency overhead, no
          templates, no hand-offs<span className="text-blue"> ●</span> one
          accountable operator from first sketch to live site.
        </>
      }
      items={projects.filter((p) => p.kind === 'client')}
    />
  );
}

/* ─── Products — own work, the engineering proof ─── */
export function ProductWork() {
  return (
    <WorkSection
      id="products"
      label="// 04 / MY PRODUCTS — BUILT & SHIPPED SOLO"
      labelClass="text-accent"
      heading={
        <>
          What I build when
          <br />
          I&rsquo;m the client.
        </>
      }
      intro={
        <>
          My own products, live in production with real users
          <span className="text-accent"> ●</span> iOS apps, SaaS platforms,
          App Store releases<span className="text-accent"> ●</span> conceived,
          designed, engineered, and shipped by one person.
        </>
      }
      items={projects.filter((p) => p.kind === 'product')}
    />
  );
}
