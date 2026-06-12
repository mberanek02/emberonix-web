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

export default function PupDatesPage() {
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
                href="/#products"
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
                Pup Play Dates
              </h1>
              <p className="font-sans text-h3 md:text-h2 text-text-secondary font-light max-w-3xl leading-snug mb-4">
                Find parks. Meet dogs. Schedule play dates.
              </p>
              <p className="font-sans text-body-lg text-text-muted max-w-2xl leading-relaxed mb-10">
                A social app for dog owners to discover nearby parks, connect with other dogs through QR codes, and set up play dates. Your dog is the star &mdash; their profile is front and center.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://apps.apple.com/app/id6757728006"
                  target="_blank"
                  rel="noopener noreferrer"
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
                  Free to use &middot; Premium features available
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
                Everything Your Dog Needs
              </h2>
              <div className="accent-line mt-4 mb-10 md:mb-14" />
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 max-w-5xl">
                <div>
                  <FeatureCard
                    icon="🗺️"
                    title="Park Discovery"
                    description="Find dog-friendly parks nearby with real-time Apple Maps data and community-submitted venues. A voting system ensures only verified spots show up."
                  />
                  <FeatureCard
                    icon="📱"
                    title="QR Code Connections"
                    description="Generate a personalized QR code for your dog. Meet someone at the park? Scan to connect instantly and see each other's dog profiles."
                  />
                  <FeatureCard
                    icon="📅"
                    title="Play Date Scheduling"
                    description="Propose play dates with location, date, time, and notes. Coordinate multi-dog meetups and keep track of upcoming and past play dates."
                  />
                </div>
                <div>
                  <FeatureCard
                    icon="🐕"
                    title="Dog-First Profiles"
                    description="Your dog's profile is the main identity — breed, size, temperament, photos, and play style. Owners are secondary. Because let's be honest, we're all here for the dogs."
                  />
                  <FeatureCard
                    icon="🏅"
                    title="Community Trust Badges"
                    description="Earn badges through participation — submitting parks, verifying venues, completing play dates, and building your profile. Build organic trust in the community."
                  />
                  <FeatureCard
                    icon="📶"
                    title="Works Offline"
                    description="Browse profiles, view parks, and manage favorites even without connectivity. Everything syncs back up when you're online again."
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
                Three Steps to New Friends
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
                      Create Your Dog&rsquo;s Profile
                    </h4>
                    <p className="font-sans text-body text-text-secondary leading-relaxed">
                      Add your dog&rsquo;s photo, breed, size, and play style. Got multiple dogs? Add them all. Each one gets their own profile and QR code.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 py-6 hairline-b">
                  <span className="font-serif text-h2 font-light text-accent opacity-50 shrink-0 w-12">
                    02
                  </span>
                  <div>
                    <h4 className="font-serif text-h3 font-light text-text-primary mb-2">
                      Find Parks & Connect
                    </h4>
                    <p className="font-sans text-body text-text-secondary leading-relaxed">
                      Discover dog parks near you. When you meet someone at the park, scan their QR code to connect. No usernames to remember, no friend requests to forget.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 py-6">
                  <span className="font-serif text-h2 font-light text-accent opacity-50 shrink-0 w-12">
                    03
                  </span>
                  <div>
                    <h4 className="font-serif text-h3 font-light text-text-primary mb-2">
                      Schedule Play Dates
                    </h4>
                    <p className="font-sans text-body text-text-secondary leading-relaxed">
                      Propose a play date with a location, time, and which dogs are joining. Your connections get notified and can accept right from the app.
                    </p>
                  </div>
                </div>
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
                  href="https://apps.apple.com/app/id6757728006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-body text-text-secondary hover:text-accent transition-colors"
                >
                  App Store
                </a>
                <Link
                  href="/projects/pupdates/tech"
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
