'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollReveal } from './ScrollReveal';
import { projects, type Project } from '@/data/projects';
import { EmberonixMonogram } from './EmberonixMonogram';

/* ─── Featured Project Block ─── */
function FeaturedCard({ project, index }: { project: Project; index: number }) {
  const isOdd = index % 2 !== 0;

  return (
    <ScrollReveal>
      <article
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 py-14 md:py-20 hairline-b group`}
      >
        {/* Number + meta column */}
        <div
          className={`lg:col-span-3 flex flex-col gap-6 ${
            isOdd ? 'lg:order-2 lg:col-start-10' : 'lg:order-1'
          }`}
        >
          <span className="font-serif text-display-sm font-light text-accent opacity-40">
            0{index + 1}
          </span>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="tag-pill">
                {tag}
              </span>
            ))}
          </div>
          {/* Stats */}
          {project.stats && (
            <div className="grid grid-cols-2 gap-4 mt-4">
              {project.stats.map((stat) => (
                <div key={stat.label}>
                  <span className="block font-serif text-h2 font-light text-accent">
                    {stat.value}
                  </span>
                  <span className="text-caption text-text-muted font-sans">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Content column */}
        <div
          className={`lg:col-span-8 ${
            isOdd ? 'lg:order-1 lg:col-start-1' : 'lg:order-2 lg:col-start-5'
          }`}
        >
          <h3 className="font-serif text-h1 md:text-display-sm font-light text-text-primary mb-4 group-hover:text-accent transition-colors duration-300">
            {project.name}
          </h3>
          <p className="font-sans text-body-lg text-text-secondary mb-4 max-w-2xl leading-relaxed">
            {project.tagline}
          </p>
          {project.description && (
            <p className="font-sans text-body text-text-muted mb-8 max-w-2xl leading-relaxed">
              {project.description}
            </p>
          )}

          {/* Project image */}
          {project.image && (
            <div className="relative w-full aspect-video mb-8 overflow-hidden border border-hairline">
              <Image
                src={project.image}
                alt={`${project.name} screenshot`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </div>
          )}

          <div className="flex gap-4">
            <Link
              href={project.caseStudyUrl}
              className="inline-flex items-center gap-2 text-small font-sans font-medium text-accent hover:text-accent-hover transition-colors"
            >
              Case Study
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="transition-transform group-hover:translate-x-0.5"
              >
                <path
                  d="M1 7h11m0 0L8 3m4 4L8 11"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </article>
    </ScrollReveal>
  );
}

/* ─── Standard Project Card ─── */
function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const shouldReduce = useReducedMotion();

  return (
    <ScrollReveal delay={index * 0.08}>
      <motion.article
        whileHover={shouldReduce ? {} : { y: -4 }}
        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
        className="group relative flex flex-col h-full bg-bg-card border border-hairline hover:border-hairline-strong transition-colors duration-300"
      >
        {/* Project image */}
        {project.image && (
          <div className="relative w-full aspect-[16/10] overflow-hidden border-b border-hairline">
            <Image
              src={project.image}
              alt={`${project.name} screenshot`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        )}

        <div className="flex flex-col flex-1 p-6 md:p-8">
          {/* Top row — number + tags */}
          <div className="flex items-start justify-between mb-6">
            <span className="font-serif text-h2 font-light text-text-muted opacity-30">
              0{index + 3}
            </span>
            <div className="flex flex-wrap gap-1.5 justify-end">
              {project.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          <h4 className="font-serif text-h2 font-light text-text-primary mb-3 group-hover:text-accent transition-colors duration-300">
            {project.name}
          </h4>
          <p className="font-sans text-body text-text-secondary leading-relaxed flex-1 mb-6">
            {project.tagline}
          </p>

          {/* Stats row */}
          {project.stats && (
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6">
              {project.stats.slice(0, 3).map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-1.5">
                  <span className="font-serif text-body-lg font-light text-accent">
                    {stat.value}
                  </span>
                  <span className="text-caption text-text-muted font-sans">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Links */}
          <div className="flex gap-4 mt-auto pt-4 hairline-t">
            <Link
              href={project.caseStudyUrl}
              className="text-small font-sans font-medium text-accent hover:text-accent-hover transition-colors"
            >
              Case Study
            </Link>
          </div>
        </div>

        {/* Corner accent on hover */}
        <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute top-0 right-0 w-px h-8 bg-accent" />
          <div className="absolute top-0 right-0 h-px w-8 bg-accent" />
        </div>
      </motion.article>
    </ScrollReveal>
  );
}

/* ─── Projects Section ─── */
export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const standard = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="mx-auto max-w-container px-6 md:px-10">
        {/* Section header */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <EmberonixMonogram size={18} className="text-text-muted opacity-50" />
            <span className="text-caption uppercase tracking-widest text-text-muted font-sans">
              Selected Work
            </span>
          </div>
          <h2 className="font-serif text-h1 md:text-display-sm font-light text-text-primary mb-2">
            Projects
          </h2>
          <p className="font-sans text-body text-text-muted max-w-2xl mb-2">
            Every project below was built using agentic coding workflows with Claude Code — from structured plan-apply-unify cycles to contract-driven step-based development.
          </p>
          <div className="accent-line mt-4 mb-12 md:mb-16" />
        </ScrollReveal>

        {/* Featured projects */}
        <div className="mb-16 md:mb-24">
          {featured.map((project, i) => (
            <FeaturedCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Standard grid */}
        {standard.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {standard.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
