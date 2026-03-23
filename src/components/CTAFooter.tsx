'use client';

import { ScrollReveal } from './ScrollReveal';
import { EmberonixMonogram } from './EmberonixMonogram';

export function CTAFooter() {
  return (
    <footer id="contact" className="py-24 md:py-32 hairline-t">
      <div className="mx-auto max-w-container px-6 md:px-10">
        {/* CTA block */}
        <ScrollReveal>
          <div className="max-w-2xl mb-16 md:mb-20">
            <span className="text-caption uppercase tracking-widest text-accent font-sans font-medium block mb-6">
              Let&rsquo;s work together
            </span>
            <h2 className="font-serif text-h1 md:text-display-sm font-light text-text-primary mb-6">
              Have a product to build?
            </h2>
            <p className="font-sans text-body-lg text-text-secondary leading-relaxed mb-8">
              I&rsquo;m always open to interesting projects — whether you need a
              technical co-founder, a product engineer, or an AI systems partner.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:hello@emberonix.com"
                className="inline-flex items-center px-7 py-3 bg-accent text-bg text-small font-sans font-medium tracking-wide hover:bg-accent-hover transition-colors duration-200"
              >
                Get In Touch
              </a>
              <a
                href="#"
                className="inline-flex items-center px-7 py-3 border border-hairline-strong text-text-primary text-small font-sans font-medium tracking-wide hover:border-text-secondary transition-colors duration-200"
              >
                Book a Call
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Footer bottom */}
        <div className="hairline-t pt-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {/* Left — monogram + copyright */}
            <div className="flex items-center gap-4">
              <EmberonixMonogram size={24} className="text-text-muted opacity-40" />
              <span className="text-small text-text-muted font-sans">
                &copy; {new Date().getFullYear()} Emberonix
              </span>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-6">
              <a
                href="mailto:hello@emberonix.com"
                className="text-small text-text-muted hover:text-text-secondary transition-colors font-sans"
              >
                Email
              </a>
              <a
                href="#"
                className="text-small text-text-muted hover:text-text-secondary transition-colors font-sans"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-small text-text-muted hover:text-text-secondary transition-colors font-sans"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-small text-text-muted hover:text-text-secondary transition-colors font-sans"
              >
                X / Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
