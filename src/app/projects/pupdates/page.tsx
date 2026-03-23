'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { CTAFooter } from '@/components/CTAFooter';
import {
  ProjectHero,
  ProjectSection,
  ProjectImageRow,
  AgenticStep,
  TechItem,
} from '@/components/ProjectLayout';

const BackgroundParticles = dynamic(
  () =>
    import('@/components/BackgroundParticles').then((m) => m.BackgroundParticles),
  { ssr: false }
);

export default function PupDatesPage() {
  return (
    <>
      <BackgroundParticles />
      <Navbar />
      <main className="relative z-10">
        <ProjectHero
          name="Pup Play Dates"
          tagline="A dog park social app taken from concept to App Store using contract-driven Claude Code development — 109 documented steps with 1,064 passing tests."
          tags={['iOS', 'SwiftUI', 'Supabase', 'Claude Code', 'MapKit']}
          stats={[
            { label: 'Steps Shipped', value: '109+' },
            { label: 'Tests Passing', value: '1,064' },
            { label: 'Test Files', value: '44' },
            { label: 'Security Items', value: '9' },
          ]}
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
          <ProjectImageRow
            images={[
              { src: '/images/projects/pupdates-home.png', alt: 'PupDates home screen' },
              { src: '/images/projects/pupdates-parks.png', alt: 'PupDates parks discovery' },
            ]}
          />
        </ProjectSection>

        {/* Agentic Workflow */}
        <ProjectSection label="Agentic Workflow" title="Contract-Driven Development">
          <div className="max-w-3xl mb-10">
            <p className="font-sans text-body-lg text-text-secondary leading-relaxed mb-8">
              Pup Play Dates demonstrates a different agentic pattern than the framework-heavy approaches used in Memotive and PropertyHQ. Here, a 535-line CLAUDE.md file served as a master architectural contract that governed every interaction with Claude Code — defining exactly how steps should be proposed, implemented, and verified.
            </p>
          </div>

          <div className="max-w-3xl mb-10">
            <h3 className="font-serif text-h2 font-light text-text-primary mb-6">
              The Step Protocol
            </h3>
            <AgenticStep
              number="01"
              title="Restate the Goal"
              description="Every step begins with Claude restating the objective in 1–2 sentences. No ambiguity — if the restatement doesn't match intent, it's caught before any code is written."
            />
            <AgenticStep
              number="02"
              title="Propose a Tiny Plan"
              description="An optional 1–3 bullet plan for the implementation. The emphasis is on 'tiny' — each step does exactly one thing, keeping changes small and reviewable."
            />
            <AgenticStep
              number="03"
              title="Implement Only That Step"
              description="Claude implements the single step, then outputs: files created/edited (with paths), a short behavior summary, exact verification instructions ('tap X, then Y, verify Z'), and a suggestion for the next smallest step."
            />
            <AgenticStep
              number="04"
              title="Stop and Wait"
              description="Claude stops after each step and waits for the next instruction. No runaway implementations. This creates a natural review checkpoint that caught issues early across all 109+ steps."
            />
          </div>

          <div className="max-w-3xl">
            <h3 className="font-serif text-h2 font-light text-text-primary mb-6">
              Architectural Constraints
            </h3>
            <p className="font-sans text-body text-text-muted leading-relaxed mb-4">
              The CLAUDE.md contract enforced strict architectural boundaries: MVVM with @Observable macro, no third-party dependencies without approval, async/await for all async patterns, @MainActor for thread safety, and SwiftData for persistence. These constraints meant Claude operated within a well-defined design space, producing consistent code across 151 Swift files.
            </p>
            <p className="font-sans text-body text-text-muted leading-relaxed">
              MCP integration with Supabase meant Claude could directly apply migrations, execute SQL, and manage tables — eliminating manual context-switching between the IDE and database console.
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
          <ProjectImageRow
            images={[
              { src: '/images/projects/pupdates-playdates.png', alt: 'Play dates screen' },
              { src: '/images/projects/pupdates-landing.png', alt: 'PupDates landing' },
            ]}
          />
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
              <TechItem name="MCP Integration" detail="Direct Supabase operations from Claude Code" />
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
