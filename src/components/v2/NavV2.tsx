'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Magnetic } from './Magnetic';

const LINKS = [
  { label: 'The Craft', href: '#craft', index: '01' },
  { label: 'Client Work', href: '#work', index: '02' },
  { label: 'The Systems', href: '#systems', index: '03' },
  { label: 'Products', href: '#products', index: '04' },
  { label: 'Contact', href: '#contact', index: '05' },
];

export function NavV2() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
    return () => { document.documentElement.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-[80] transition-all duration-500 ${
          scrolled && !open ? 'bg-bg/70 backdrop-blur-xl hairline-b' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-[1680px] px-6 md:px-10 h-18 md:h-20 flex items-center justify-between">
          <Link href="/" className="flex items-baseline gap-2 group" aria-label="Emberonix — home">
            <span className="font-wordmark uppercase tracking-tight text-xl md:text-2xl text-text-primary group-hover:text-accent transition-colors">
              EMBERONIX
            </span>
            <span className="mono-label text-accent leading-none">®</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-9" aria-label="Primary">
            {LINKS.slice(0, 4).map((l) => (
              <a key={l.href} href={l.href} className="nav-link mono-label text-text-secondary">
                <span className="text-accent/60 mr-1.5">{l.index}</span>
                {l.label}
              </a>
            ))}
            {/* Separate route (not an in-page section) — no section index */}
            <Link href="/playground" className="nav-link mono-label text-text-secondary">
              <span className="text-accent/60 mr-1.5">✦</span>
              Playground
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <Magnetic strength={0.15}>
                <a href="#contact" className="btn-primary !py-2.5 !px-5">
                  Start a Project
                </a>
              </Magnetic>
            </div>
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="lg:hidden relative w-10 h-10 grid place-items-center"
            >
              <span className={`absolute w-6 h-px bg-text-primary transition-all duration-300 ${open ? 'rotate-45' : '-translate-y-[5px]'}`} />
              <span className={`absolute w-6 h-px bg-text-primary transition-all duration-300 ${open ? '-rotate-45' : 'translate-y-[5px]'}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen menu — mobile / tablet */}
      <div
        className={`fixed inset-0 z-[70] bg-bg/95 backdrop-blur-2xl transition-opacity duration-500 lg:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="h-full flex flex-col justify-center px-8 gap-2" aria-label="Mobile">
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="overflow-hidden group"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <span
                className={`flex items-baseline gap-4 font-display uppercase text-5xl text-text-primary transition-transform duration-500 group-hover:text-accent ${
                  open ? 'translate-y-0' : 'translate-y-full'
                }`}
                style={{ transitionDelay: `${100 + i * 60}ms` }}
              >
                <span className="mono-label text-accent">{l.index}</span>
                {l.label}
              </span>
            </a>
          ))}
          <Link
            href="/playground"
            onClick={() => setOpen(false)}
            className="overflow-hidden group"
          >
            <span
              className={`flex items-baseline gap-4 font-display uppercase text-5xl text-text-primary transition-transform duration-500 group-hover:text-accent ${
                open ? 'translate-y-0' : 'translate-y-full'
              }`}
              style={{ transitionDelay: `${100 + LINKS.length * 60}ms` }}
            >
              <span className="mono-label text-accent">✦</span>
              Playground
            </span>
          </Link>
          <span className="mono-label text-text-muted mt-10">// SITES THAT SELL ● AGENTS THAT SHIP</span>
        </nav>
      </div>
    </>
  );
}
