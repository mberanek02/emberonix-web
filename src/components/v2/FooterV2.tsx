'use client';

import Image from 'next/image';
import { Magnetic } from './Magnetic';
import { ContactForm } from './ContactForm';

/* Operator bio + colossal contact CTA. The "LET'S BUILD" monument is
 * outlined type that floods with ember on hover. */
export function FooterV2() {
  return (
    <footer id="contact" className="relative hairline-t overflow-hidden">
      {/* Operator strip */}
      <div className="px-6 md:px-10 py-20 md:py-28 mx-auto max-w-[1680px] grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-12 items-center">
        <div className="portrait-editorial relative w-56 md:w-64 mx-auto lg:mx-0 shrink-0">
          <Image
            src="/images/Michael.png"
            alt="Michael Beranek"
            width={512}
            height={763}
            className="w-full h-auto"
          />
        </div>
        <div className="max-w-2xl">
          <span className="mono-label text-accent block mb-5">// 06 / THE OPERATOR</span>
          <p className="font-sans text-xl md:text-2xl text-text-primary leading-relaxed mb-6">
            I&rsquo;m Michael Beranek — twenty years of engineering, from
            enterprise systems to App Store releases. Emberonix is everything
            I&rsquo;ve learned, pointed at your business.
          </p>
          <p className="mono-label text-text-muted">
            CHARLOTTE, NC <span className="text-accent mx-2">●</span> WORKS EVERYWHERE
            <span className="text-accent mx-2">●</span> RESPONDS FAST
          </p>
        </div>
      </div>

      {/* Monument CTA */}
      <div className="relative px-6 md:px-10 py-16 md:py-24 hairline-t">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(60% 90% at 50% 110%, rgba(249,115,22,0.14) 0%, transparent 65%)' }}
        />
        <div className="mx-auto max-w-[1680px] relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <a
              href="mailto:mberanek@emberonix.com"
              className="cta-monument block font-display uppercase leading-[0.85] tracking-tight select-none"
              data-cursor="view"
              data-cursor-label="EMAIL →"
              aria-label="Email Michael at mberanek@emberonix.com"
            >
              <span className="block">LET&rsquo;S</span>
              <span className="block">BUILD.</span>
            </a>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Magnetic>
                <a href="mailto:mberanek@emberonix.com" className="btn-ghost" data-cursor="link">
                  mberanek@emberonix.com
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="https://www.linkedin.com/company/emberonix/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  data-cursor="link"
                >
                  LinkedIn ↗
                </a>
              </Magnetic>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>

      {/* Bottom strip */}
      <div className="px-6 md:px-10 py-6 hairline-t">
        <div className="mx-auto max-w-[1680px] flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <span className="mono-label text-text-muted">
            © {new Date().getFullYear()} EMBERONIX LLC <span className="text-accent mx-1">●</span> SITES THAT SELL. AGENTS THAT SHIP.
          </span>
          <span className="mono-label text-text-dim">DESIGNED & ENGINEERED BY ONE HAND — THIS SITE INCLUDED</span>
        </div>
      </div>
    </footer>
  );
}
