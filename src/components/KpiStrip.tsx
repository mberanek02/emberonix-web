'use client';

import { ScrollReveal } from './ScrollReveal';

interface Kpi {
  label: string;
  value: string;
  /** width % of the underline bar */
  fill: number;
  /** tailwind text color class for the value */
  color: string;
  /** tailwind bg color class for the underline */
  bar: string;
}

const KPIS: Kpi[] = [
  { label: 'Engineering',    value: '20+ YRS',  fill: 95,  color: 'text-accent',        bar: 'bg-accent' },
  { label: 'Own Products',   value: '3 LIVE',   fill: 75,  color: 'text-tertiary',      bar: 'bg-tertiary' },
  { label: 'Client Sites',   value: '2 SHIPPED', fill: 60, color: 'text-text-primary',  bar: 'bg-text-primary' },
  { label: 'Hand-offs',      value: 'ZERO',     fill: 100, color: 'text-accent-hover',  bar: 'bg-accent-hover' },
];

export function KpiStrip() {
  return (
    <section
      aria-label="Performance metrics"
      className="relative z-10 mx-auto max-w-container w-full px-6 md:px-12 lg:px-16 pb-20 md:pb-24 -mt-8 md:-mt-12"
    >
      <ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {KPIS.map((k) => (
            <div key={k.label} className="glass-panel p-5 md:p-6 flex flex-col gap-2">
              <span className="mono-label text-text-muted">{k.label}</span>
              <span
                className={`font-display uppercase text-3xl md:text-4xl leading-none ${k.color}`}
              >
                {k.value}
              </span>
              <div className="w-full h-[2px] bg-hairline mt-3">
                <div
                  className={`h-full ${k.bar}`}
                  style={{ width: `${k.fill}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
