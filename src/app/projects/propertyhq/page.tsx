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

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="py-6 md:py-8 hairline-b last:border-0">
      <div className="flex items-start gap-4">
        <span className="text-h2 shrink-0 mt-0.5" aria-hidden="true">
          {icon}
        </span>
        <div>
          <h3 className="font-serif text-h3 font-light text-text-primary mb-2">
            {title}
          </h3>
          <p className="font-sans text-body text-text-secondary leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function ModuleCard({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div className="bg-bg-card border border-hairline p-6">
      <h4 className="font-serif text-h3 font-light text-accent mb-3">{name}</h4>
      <p className="font-sans text-body text-text-secondary leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default function PropertyHQPage() {
  return (
    <>
      <BackgroundParticles />
      <Navbar />
      <main className="relative z-10">
        {/* ─── Hero ─── */}
        <section className="pt-32 md:pt-44 pb-16 md:pb-24">
          <div className="mx-auto max-w-container px-6 md:px-10">
            <ScrollReveal>
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 text-small font-sans text-text-muted hover:text-accent transition-colors mb-10"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M13 7H3m0 0l4-4M3 7l4 4"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                All Projects
              </Link>
            </ScrollReveal>

            <ScrollReveal>
              <h1 className="font-serif text-display-sm md:text-display font-light text-text-primary mb-6">
                PropertyHQ
              </h1>
              <p className="font-sans text-h3 md:text-h2 text-text-secondary font-light max-w-3xl leading-snug mb-4">
                Job management built for your trade.
              </p>
              <p className="font-sans text-body-lg text-text-muted max-w-2xl leading-relaxed mb-10">
                A modular platform where contractors activate only the tools they need. Property flipping, renovations, HVAC, plumbing &mdash; each module is purpose-built for how that trade actually works.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://propertyhq.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-accent text-bg text-small font-sans font-medium tracking-wide hover:bg-accent-hover transition-colors duration-200"
                >
                  Visit PropertyHQ
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M1 7h11m0 0L8 3m4 4L8 11"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── What It Does ─── */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-container px-6 md:px-10">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-4">
                <EmberonixMonogram size={16} className="text-text-muted opacity-50" />
                <span className="text-caption uppercase tracking-widest text-text-muted font-sans">
                  Features
                </span>
              </div>
              <h2 className="font-serif text-h1 md:text-h1 font-light text-text-primary mb-2">
                Everything a Contractor Needs
              </h2>
              <div className="accent-line mt-4 mb-10 md:mb-14" />
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 max-w-5xl">
                <div>
                  <FeatureCard
                    icon="🧩"
                    title="Modular by Design"
                    description="Activate only the modules your business needs — Flip, Renovations, HVAC, or Plumbing. Each one is tailored to the workflows, budgets, and terminology of that specific trade."
                  />
                  <FeatureCard
                    icon="🤖"
                    title="Rex AI Assistant"
                    description="An AI assistant that parses receipts, generates estimates, answers budget questions, creates tasks, and manages documents. Always confirms before making changes."
                  />
                  <FeatureCard
                    icon="💰"
                    title="Invoicing & Payments"
                    description="Full invoice lifecycle from draft to paid. Stripe Connect for ACH and card payments. QuickBooks sync keeps your books up to date automatically."
                  />
                </div>
                <div>
                  <FeatureCard
                    icon="📋"
                    title="Job & Task Management"
                    description="Scheduling, budgeting, task assignment, and photo-required completion for construction verification. Manage everything from one dashboard."
                  />
                  <FeatureCard
                    icon="🏠"
                    title="Customer Portal"
                    description="Your clients view project timelines, approve invoices, browse photo galleries, and message you — all through a simple magic-link login. No account creation required."
                  />
                  <FeatureCard
                    icon="📊"
                    title="Proactive Insights"
                    description="Automatic alerts for overdue tasks, budget overruns, stale jobs, worker overload, and expense spikes. Know what needs attention before it becomes a problem."
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── Trade Modules ─── */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-container px-6 md:px-10">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-4">
                <EmberonixMonogram size={16} className="text-text-muted opacity-50" />
                <span className="text-caption uppercase tracking-widest text-text-muted font-sans">
                  Modules
                </span>
              </div>
              <h2 className="font-serif text-h1 md:text-h1 font-light text-text-primary mb-2">
                Built for Your Trade
              </h2>
              <div className="accent-line mt-4 mb-10 md:mb-14" />
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
                <ModuleCard
                  name="Flip"
                  description="Property flipping with portfolio management, budget tracking with 100+ cost code presets, transaction ledger, and photo-verified task completion."
                />
                <ModuleCard
                  name="Renovations"
                  description="Client-based remodeling with estimates, selections management, change orders, and a complete invoice lifecycle with Stripe Connect payments."
                />
                <ModuleCard
                  name="HVAC"
                  description="Service and install jobs with scope builder, scheduling, and invoicing. Built for contractors managing both maintenance calls and larger installations."
                />
                <ModuleCard
                  name="Plumbing"
                  description="Job and customer management built for plumbing contractors, with shared scheduling, invoicing, and task infrastructure plus trade-specific workflows."
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── Footer Links ─── */}
        <section className="py-16 md:py-20 hairline-t">
          <div className="mx-auto max-w-container px-6 md:px-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="flex flex-wrap gap-6">
                <a
                  href="https://propertyhq.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-body text-text-secondary hover:text-accent transition-colors"
                >
                  Visit PropertyHQ
                </a>
                <Link
                  href="/projects/propertyhq/tech"
                  className="font-sans text-body text-text-muted hover:text-accent transition-colors"
                >
                  How It&rsquo;s Built &rarr;
                </Link>
              </div>
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
