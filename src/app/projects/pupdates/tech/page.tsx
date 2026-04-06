'use client';

import dynamic from 'next/dynamic';
import { Navbar } from '@/components/Navbar';
import { CTAFooter } from '@/components/CTAFooter';
import {
  ProjectHero,
  ProjectSection,
  TechItem,
} from '@/components/ProjectLayout';

const BackgroundParticles = dynamic(
  () =>
    import('@/components/BackgroundParticles').then((m) => m.BackgroundParticles),
  { ssr: false }
);

export default function PupDatesTechPage() {
  return (
    <>
      <BackgroundParticles />
      <Navbar />
      <main className="relative z-10">
        <ProjectHero
          name="Pup Play Dates"
          tagline="A dog-first social iOS app — park discovery, QR connections, and play date scheduling, built end-to-end using a contract-driven agentic workflow."
          tags={['iOS', 'SwiftUI', 'Supabase', 'Agentic Development', 'MapKit']}
        />

        {/* Overview */}
        <ProjectSection label="Overview" title="The Product">
          <div className="max-w-3xl">
            <p className="font-sans text-body-lg text-text-secondary leading-relaxed mb-6">
              Pup Play Dates helps dog owners discover parks, connect with other owners through QR codes, and schedule play dates for their dogs. It&rsquo;s a dog-forward social network where your dog&rsquo;s profile is the primary identity — owners are secondary.
            </p>
            <p className="font-sans text-body text-text-muted leading-relaxed mb-6">
              The app features a hybrid park discovery system that combines real-time Apple Maps data with community-submitted venues verified through a voting system. Users scan QR codes to connect, propose play dates with location and time, manage multi-dog profiles with photos, and earn community trust badges through participation. A freemium subscription model (StoreKit 2) gates premium features like custom QR colors and dog avatar overlays.
            </p>
            <p className="font-sans text-body text-text-muted leading-relaxed">
              Two complete implementations exist: a production iOS app (Swift/SwiftUI) submitted to the App Store, and a cross-platform React Native prototype (TypeScript/Expo) that validated the concept. The iOS version was built entirely through an incremental, contract-driven agentic workflow.
            </p>
          </div>
        </ProjectSection>

        {/* Agentic Workflow */}
        <ProjectSection label="Agentic Workflow" title="Contract-Driven Development">
          <div className="max-w-3xl mb-10">
            <p className="font-sans text-body-lg text-text-secondary leading-relaxed mb-8">
              Pup Play Dates was built using a strict step-by-step agentic workflow — every feature was proposed, scoped, implemented, and verified individually before moving on. No bulk code generation, no shortcuts.
            </p>
          </div>

          <div className="max-w-3xl">
            <h3 className="font-serif text-h2 font-light text-text-primary mb-6">
              Architectural Constraints
            </h3>
            <p className="font-sans text-body text-text-muted leading-relaxed mb-4">
              The codebase enforces strict architectural boundaries: MVVM with @Observable, no third-party dependencies without explicit justification, async/await for all asynchronous patterns, @MainActor for thread safety, and SwiftData for persistence. These constraints kept the architecture consistent across 151 Swift files.
            </p>
            <p className="font-sans text-body text-text-muted leading-relaxed">
              Supabase handles auth, real-time sync, storage, and edge functions — with migrations, SQL, and table management integrated directly into the development workflow.
            </p>
          </div>
        </ProjectSection>

        {/* Key Features */}
        <ProjectSection label="Shipped Features" title="What Was Built">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <div>
              <h4 className="font-serif text-h3 font-light text-accent mb-3">Hybrid Park Discovery</h4>
              <p className="font-sans text-body text-text-muted leading-relaxed">
                Apple Maps integration for real-time park data combined with community-submitted venues. A voting system auto-promotes venues to verified status at 3 confirmations.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-h3 font-light text-accent mb-3">QR Code Connections</h4>
              <p className="font-sans text-body text-text-muted leading-relaxed">
                Generate personalized QR codes with 6 color themes and optional dog avatar overlays (premium). Scan to instantly connect and view each other&rsquo;s dog profiles.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-h3 font-light text-accent mb-3">Play Date Proposals</h4>
              <p className="font-sans text-body text-text-muted leading-relaxed">
                Create proposals with dog selection, location (from discovered or custom places), date/time, and notes. Multi-dog acceptance, photo attachments, and map integration for meetup details.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-h3 font-light text-accent mb-3">Community Trust System</h4>
              <p className="font-sans text-body text-text-muted leading-relaxed">
                4 badge types across 5 tiers earned through participation — park submissions, venue verifications, play date completions, and profile quality. Builds organic trust in the community.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-h3 font-light text-accent mb-3">Offline-First Architecture</h4>
              <p className="font-sans text-body text-text-muted leading-relaxed">
                SwiftData local persistence with async Supabase sync. Users can browse profiles, view parks, and manage favorites even without connectivity. Changes sync when back online.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-h3 font-light text-accent mb-3">Security Hardening</h4>
              <p className="font-sans text-body text-text-muted leading-relaxed">
                9 audit-driven security items: Keychain integration, CryptoKit encryption, nonce management for OAuth, notification payload validation, input sanitization, and debug print wrapping.
              </p>
            </div>
          </div>
        </ProjectSection>

        {/* Tech Stack */}
        <ProjectSection label="Technology" title="Tech Stack">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 max-w-4xl">
            <div>
              <h4 className="font-serif text-h3 font-light text-text-primary mb-4">iOS App</h4>
              <TechItem name="Swift + SwiftUI" detail="iOS 17+, MVVM with @Observable" />
              <TechItem name="SwiftData" detail="Local persistence, offline-first sync" />
              <TechItem name="MapKit" detail="MKLocalSearch, CoreLocation for distance" />
              <TechItem name="AVFoundation" detail="QR code scanning and generation" />
              <TechItem name="StoreKit 2" detail="Subscription tiers, trial logic" />
            </div>
            <div>
              <h4 className="font-serif text-h3 font-light text-text-primary mb-4">Backend & Security</h4>
              <TechItem name="Supabase" detail="Auth, real-time sync, storage, edge functions" />
              <TechItem name="CryptoKit" detail="Encryption for sensitive local data" />
              <TechItem name="Keychain" detail="Secure token and credential storage" />
              <TechItem name="APNs" detail="Push notifications via edge functions" />
              <TechItem name="MCP Integration" detail="Direct Supabase operations from the development workflow" />
            </div>
          </div>
        </ProjectSection>

        {/* Testing */}
        <ProjectSection label="Quality" title="Test Coverage">
          <div className="max-w-3xl">
            <p className="font-sans text-body-lg text-text-secondary leading-relaxed mb-6">
              With 1,064 tests across 44 test files and 14,511 lines of test code, Pup Play Dates has one of the most comprehensive test suites of any app built with agentic workflows. Tests were written alongside features — not as an afterthought — as part of the step-based development contract.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 hairline-t hairline-b">
              <div>
                <span className="block font-serif text-h1 font-light text-accent">44</span>
                <span className="text-caption text-text-muted font-sans">Test Files</span>
              </div>
              <div>
                <span className="block font-serif text-h1 font-light text-accent">1,064</span>
                <span className="text-caption text-text-muted font-sans">Tests Passing</span>
              </div>
              <div>
                <span className="block font-serif text-h1 font-light text-accent">14.5K</span>
                <span className="text-caption text-text-muted font-sans">Lines of Test Code</span>
              </div>
              <div>
                <span className="block font-serif text-h1 font-light text-accent">25+</span>
                <span className="text-caption text-text-muted font-sans">Services Tested</span>
              </div>
            </div>
          </div>
        </ProjectSection>
      </main>
      <CTAFooter />
    </>
  );
}
