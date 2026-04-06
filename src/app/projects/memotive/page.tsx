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

function PricingCard({
  plan,
  price,
  period,
  note,
  highlight,
}: {
  plan: string;
  price: string;
  period: string;
  note?: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`relative p-8 ${
        highlight
          ? 'bg-bg-elevated border border-accent/20'
          : 'bg-bg-card border border-hairline'
      }`}
    >
      {highlight && (
        <span className="absolute top-0 left-8 -translate-y-1/2 bg-accent text-bg text-caption font-sans font-medium uppercase tracking-wider px-3 py-1">
          Best Value
        </span>
      )}
      <p className="font-sans text-caption uppercase tracking-widest text-text-muted mb-4">
        {plan}
      </p>
      <div className="flex items-baseline gap-1 mb-1">
        <span className="font-serif text-display-sm font-light text-text-primary">
          {price}
        </span>
        <span className="font-sans text-body text-text-muted">/{period}</span>
      </div>
      {note && (
        <p className="font-sans text-small text-accent mt-2">{note}</p>
      )}
    </div>
  );
}

export default function MemotivePage() {
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
                Memotive
              </h1>
              <p className="font-sans text-h3 md:text-h2 text-text-secondary font-light max-w-3xl leading-snug mb-4">
                A coach who never forgets.
              </p>
              <p className="font-sans text-body-lg text-text-muted max-w-2xl leading-relaxed mb-10">
                AI-powered health coaching that remembers everything about you &mdash; your goals, your restrictions, your preferences. Personalized nutrition, fitness, and wellness guidance through natural conversation.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-accent text-bg text-small font-sans font-medium tracking-wide hover:bg-accent-hover transition-colors duration-200"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M12.75 6.75C12.75 4.67893 11.0711 3 9 3C6.92893 3 5.25 4.67893 5.25 6.75C5.25 10.5 3 12 3 12H15C15 12 12.75 10.5 12.75 6.75Z"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Download on the App Store
                </a>
                <span className="font-sans text-small text-text-muted">
                  7-day free trial &middot; Cancel anytime
                </span>
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
                Your Personal Health Coach
              </h2>
              <div className="accent-line mt-4 mb-10 md:mb-14" />
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 max-w-5xl">
                <div>
                  <FeatureCard
                    icon="🧠"
                    title="A Coach Who Remembers"
                    description="Your goals, dietary restrictions, injuries, preferences, coaching style — Memotive remembers it all. Every conversation builds on the last. No repeating yourself."
                  />
                  <FeatureCard
                    icon="📸"
                    title="Photo Meal Logging"
                    description="Snap a photo of any meal and get an instant nutrition breakdown. No searching through food databases or guessing portion sizes."
                  />
                  <FeatureCard
                    icon="💬"
                    title="Coaching, Not Logging"
                    description="Track your nutrition through natural conversation — not tedious forms. Tell your coach what you ate, how you feel, what you're planning. They'll handle the rest."
                  />
                </div>
                <div>
                  <FeatureCard
                    icon="❤️"
                    title="Apple Health Integration"
                    description="Steps, sleep, heart rate, workouts, HRV, VO2 max — your coach sees the full picture. When something looks off, they'll bring it up before you do."
                  />
                  <FeatureCard
                    icon="🎯"
                    title="Personalized Coaching Style"
                    description="Choose how your coach talks to you — encouraging, direct, balanced, or tough love. The coach adapts to your style, not the other way around."
                  />
                  <FeatureCard
                    icon="📊"
                    title="Progress Tracking"
                    description="Progress photos with before-and-after comparisons, nutrition trends, and milestone celebrations. See how far you've come without obsessing over the numbers."
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── How It Works ─── */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-container px-6 md:px-10">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-4">
                <EmberonixMonogram size={16} className="text-text-muted opacity-50" />
                <span className="text-caption uppercase tracking-widest text-text-muted font-sans">
                  How It Works
                </span>
              </div>
              <h2 className="font-serif text-h1 md:text-h1 font-light text-text-primary mb-2">
                Three Steps to Better Health
              </h2>
              <div className="accent-line mt-4 mb-10 md:mb-14" />
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <div className="max-w-3xl">
                <div className="flex gap-6 py-6 hairline-b">
                  <span className="font-serif text-h2 font-light text-accent opacity-50 shrink-0 w-12">
                    01
                  </span>
                  <div>
                    <h4 className="font-serif text-h3 font-light text-text-primary mb-2">
                      Meet Your Coach
                    </h4>
                    <p className="font-sans text-body text-text-secondary leading-relaxed">
                      Start a conversation. Tell your coach about your goals, your diet, your lifestyle. No forms, no questionnaires &mdash; just talk naturally. Your coach learns as you go.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 py-6 hairline-b">
                  <span className="font-serif text-h2 font-light text-accent opacity-50 shrink-0 w-12">
                    02
                  </span>
                  <div>
                    <h4 className="font-serif text-h3 font-light text-text-primary mb-2">
                      Live Your Life
                    </h4>
                    <p className="font-sans text-body text-text-secondary leading-relaxed">
                      Log meals by snapping photos or just telling your coach what you ate. Share how you slept, what hurts, what&rsquo;s going well. Apple Health fills in the rest automatically.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 py-6">
                  <span className="font-serif text-h2 font-light text-accent opacity-50 shrink-0 w-12">
                    03
                  </span>
                  <div>
                    <h4 className="font-serif text-h3 font-light text-text-primary mb-2">
                      Get Smarter Over Time
                    </h4>
                    <p className="font-sans text-body text-text-secondary leading-relaxed">
                      The more you talk, the better your coach gets. They&rsquo;ll notice patterns, adjust recommendations, celebrate milestones, and call out when something needs attention &mdash; all based on your full history.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── Pricing ─── */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-container px-6 md:px-10">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-4">
                <EmberonixMonogram size={16} className="text-text-muted opacity-50" />
                <span className="text-caption uppercase tracking-widest text-text-muted font-sans">
                  Pricing
                </span>
              </div>
              <h2 className="font-serif text-h1 md:text-h1 font-light text-text-primary mb-2">
                Start Free for 7 Days
              </h2>
              <div className="accent-line mt-4 mb-10 md:mb-14" />
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
                <PricingCard
                  plan="Monthly"
                  price="$19.99"
                  period="month"
                />
                <PricingCard
                  plan="Annual"
                  price="$99.99"
                  period="year"
                  note="Save 58%"
                  highlight
                />
              </div>
              <p className="font-sans text-small text-text-muted mt-6 max-w-2xl leading-relaxed">
                Both plans include a 7-day free trial with full access. Cancel anytime during the trial and you won&rsquo;t be charged. Subscriptions are managed through the App Store.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── Footer Links ─── */}
        <section className="py-16 md:py-20 hairline-t">
          <div className="mx-auto max-w-container px-6 md:px-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="flex flex-wrap gap-6">
                <Link
                  href="/projects/memotive/support"
                  className="font-sans text-body text-text-secondary hover:text-accent transition-colors"
                >
                  Support
                </Link>
                <Link
                  href="/projects/memotive/privacy"
                  className="font-sans text-body text-text-secondary hover:text-accent transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/projects/memotive/terms"
                  className="font-sans text-body text-text-secondary hover:text-accent transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/projects/memotive/tech"
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
