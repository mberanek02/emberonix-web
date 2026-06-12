'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from '@/lib/gsapSetup';

export const PRELOADER_TOTAL_MS = 2050;

/** Forge-door preloader: a mono counter climbs to 100 while cycle-words
 * flash, then twin obsidian panels split apart like furnace doors. */
export function Preloader() {
  const rootRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const wordRef = useRef<HTMLSpanElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const seen = sessionStorage.getItem('ember-preloaded') === '1';
    if (reduced || seen) {
      setDone(true);
      return;
    }

    const root = rootRef.current;
    const count = countRef.current;
    if (!root || !count) return;

    document.documentElement.classList.add('is-loading');
    const words = ['DESIGN', 'AGENTS', 'SYSTEMS', 'EXPERIENCE'];
    let wi = 0;
    const wordTimer = setInterval(() => {
      if (wordRef.current) {
        wi = (wi + 1) % words.length;
        wordRef.current.textContent = words[wi];
      }
    }, 320);

    const counter = { v: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        clearInterval(wordTimer);
        sessionStorage.setItem('ember-preloaded', '1');
        document.documentElement.classList.remove('is-loading');
        setDone(true);
      },
    });

    tl.to(counter, {
      v: 100,
      duration: 1.25,
      ease: 'power3.inOut',
      onUpdate: () => { count.textContent = String(Math.round(counter.v)).padStart(3, '0'); },
    })
      .to('.preloader__center', { yPercent: -120, opacity: 0, duration: 0.4, ease: 'power3.in' }, '+=0.1')
      .to('.preloader__panel--top', { yPercent: -101, duration: 0.7, ease: 'power4.inOut' }, '-=0.05')
      .to('.preloader__panel--bottom', { yPercent: 101, duration: 0.7, ease: 'power4.inOut' }, '<')
      .set(root, { display: 'none' });

    return () => {
      clearInterval(wordTimer);
      tl.kill();
      document.documentElement.classList.remove('is-loading');
    };
  }, []);

  if (done) return null;

  return (
    <div ref={rootRef} className="preloader" aria-hidden="true">
      <div className="preloader__panel preloader__panel--top" />
      <div className="preloader__panel preloader__panel--bottom" />
      <div className="preloader__center">
        <span className="mono-label text-text-muted block mb-3">
          EMBERONIX / FORGING <span ref={wordRef}>DESIGN</span>
        </span>
        <span ref={countRef} className="preloader__count">000</span>
      </div>
    </div>
  );
}
