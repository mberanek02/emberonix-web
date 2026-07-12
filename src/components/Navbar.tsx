'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const navLinks = [
  { label: 'Practices', href: '/#capabilities' },
  { label: 'Client Work', href: '/#client-work' },
  { label: 'Agentic', href: '/#agentic-work' },
  { label: 'Products', href: '/#products' },
  { label: 'Playground', href: '/playground' },
  { label: 'Resume', href: '/#resume' },
  { label: 'Contact', href: '/#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-bg/85 backdrop-blur-xl hairline-b'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-container px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo wordmark */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Emberonix — home"
          >
            <span className="font-display uppercase text-2xl md:text-3xl tracking-tight text-text-primary group-hover:text-accent transition-colors">
              EMBERONIX
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="mono-label text-text-secondary hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-flex px-5 py-2 bg-accent text-accent-on font-mono text-xs font-bold uppercase tracking-widest hover:bg-accent-bright transition-colors"
            >
              Start a Project
            </a>

            {/* Mobile toggle */}
            <button
              className="md:hidden relative w-8 h-8 flex items-center justify-center"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <span
                className={`absolute w-5 h-px bg-text-primary transition-all duration-300 ${
                  mobileOpen ? 'rotate-45' : '-translate-y-1.5'
                }`}
              />
              <span
                className={`absolute w-5 h-px bg-text-primary transition-all duration-300 ${
                  mobileOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute w-5 h-px bg-text-primary transition-all duration-300 ${
                  mobileOpen ? '-rotate-45' : 'translate-y-1.5'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden bg-bg/95 backdrop-blur-xl hairline-b overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="mono-label text-text-secondary hover:text-accent transition-colors py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary justify-center mt-4"
              >
                Start a Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
