'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { ScrollReveal } from '@/components/ScrollReveal';
import { EmberonixMonogram } from '@/components/EmberonixMonogram';

const BackgroundParticles = dynamic(
  () =>
    import('@/components/BackgroundParticles').then((m) => m.BackgroundParticles),
  { ssr: false }
);

type PlaygroundProject = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  href: string;
  tags: string[];
};

const playgroundProjects: PlaygroundProject[] = [
  {
    id: 'lego-charlotte',
    title: 'Lego Charlotte',
    tagline: 'A scroll-driven flight through the Queen City, brick by brick',
    description:
      'Downtown Charlotte rebuilt entirely in LEGO — Uptown towers, the Blue Line, Bearden Park and the stadium — filmed as one continuous AI-generated camera flight. Scrolling scrubs the flight frame by frame; the finale assembles itself out of flying bricks as you arrive.',
    image: '/images/playground/lego-charlotte.jpg',
    href: '/playground/lego-charlotte/',
    tags: ['Scroll-scrubbed video', 'AI-generated scenes', 'Vanilla JS engine'],
  },
];

export default function PlaygroundPage() {
  return (
    <>
      <Navbar />
      <BackgroundParticles />
      <main className="relative min-h-screen">
        {/* ─── Hero ─── */}
        <section className="pt-36 md:pt-44 pb-16 md:pb-20">
          <div className="mx-auto max-w-container px-6 md:px-10">
            <ScrollReveal>
              <p className="mono-label text-accent mb-6">
                {'// PLAYGROUND'}
              </p>
              <h1 className="font-serif text-display-sm md:text-display font-light text-text-primary max-w-3xl">
                Where the sparks fly off the anvil.
              </h1>
              <p className="font-sans text-body-lg text-text-secondary max-w-2xl mt-6 leading-relaxed">
                Not client work, not products — experiments built for the joy of
                it. Pushing new tools until they do something worth showing.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── Projects ─── */}
        <section className="pb-24 md:pb-32">
          <div className="mx-auto max-w-container px-6 md:px-10">
            <div className="grid gap-10">
              {playgroundProjects.map((project) => (
                <ScrollReveal key={project.id}>
                  <Link
                    href={project.href}
                    className="group block bg-bg-card border border-hairline hover:border-accent/40 transition-colors"
                  >
                    <div className="grid md:grid-cols-2">
                      <div className="relative overflow-hidden aspect-[8/5]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={project.image}
                          alt={project.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                      </div>
                      <div className="p-8 md:p-10 flex flex-col justify-center">
                        <p className="mono-label text-text-muted mb-3">
                          {project.tagline}
                        </p>
                        <h2 className="font-serif text-h2 font-light text-text-primary group-hover:text-accent transition-colors mb-4">
                          {project.title}
                        </h2>
                        <p className="font-sans text-body text-text-secondary leading-relaxed mb-6">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="mono-label text-text-muted border border-hairline px-2.5 py-1"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className="mono-label text-accent">
                          Take the flight &rarr;
                        </span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Footer ─── */}
        <section className="py-16 md:py-20 hairline-t">
          <div className="mx-auto max-w-container px-6 md:px-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <Link
                href="/"
                className="font-sans text-body text-text-secondary hover:text-accent transition-colors"
              >
                &larr; Back to Emberonix
              </Link>
              <div className="flex items-center gap-4">
                <EmberonixMonogram size={20} className="text-text-muted opacity-40" />
                <span className="text-small text-text-muted font-sans">
                  &copy; {new Date().getFullYear()} Emberonix
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
