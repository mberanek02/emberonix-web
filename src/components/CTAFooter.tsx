'use client';

import { ScrollReveal } from './ScrollReveal';

export function CTAFooter() {
  return (
    <footer id="contact" className="hairline-t bg-bg-subtle">
      {/* Big CTA panel */}
      <div className="px-6 md:px-12 lg:px-16 py-20 md:py-28">
        <div className="mx-auto max-w-container">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="mono-label text-accent block mb-4">
                // ENGAGE
              </span>
              <h2 className="font-display uppercase text-h2 md:text-h1 text-text-primary mb-6">
                Have something to build?
              </h2>
              <p className="font-sans text-body-lg text-text-secondary leading-relaxed mb-10 max-w-2xl">
                A website that finally does your business justice, an AI
                system that actually ships, or something in between — technical
                co-founder seats, product engineering engagements, agentic
                systems partnerships. If you&rsquo;re building something real,
                let&rsquo;s talk.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:mberanek@emberonix.com"
                  className="btn-primary"
                >
                  Get In Touch
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h11m0 0L8 3m4 4L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/mike-beranek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Footer bottom strip */}
      <div className="px-6 md:px-12 lg:px-16 py-6 hairline-t">
        <div className="mx-auto max-w-container flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="font-display uppercase text-accent text-lg tracking-tight">
              EMBERONIX
            </span>
            <span className="mono-label text-text-muted">
              © {new Date().getFullYear()} EMBERONIX · SYSTEM STATUS: NOMINAL · [HUMAN-IN-THE-LOOP REQUIRED]
            </span>
          </div>

          <div className="flex items-center gap-6">
            {[
              { label: 'EMAIL', href: 'mailto:mberanek@emberonix.com' },
              { label: 'GITHUB', href: 'https://github.com/' },
              { label: 'LINKEDIN', href: 'https://www.linkedin.com/' },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="mono-label text-text-muted hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
