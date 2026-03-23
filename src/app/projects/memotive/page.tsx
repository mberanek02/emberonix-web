'use client';

import dynamic from 'next/dynamic';
import { Navbar } from '@/components/Navbar';
import { CTAFooter } from '@/components/CTAFooter';
import {
  ProjectHero,
  ProjectSection,
  AgenticStep,
  TechItem,
} from '@/components/ProjectLayout';

const BackgroundParticles = dynamic(
  () =>
    import('@/components/BackgroundParticles').then((m) => m.BackgroundParticles),
  { ssr: false }
);

export default function MemotivePage() {
  return (
    <>
      <BackgroundParticles />
      <Navbar />
      <main className="relative z-10">
        <ProjectHero
          name="Memotive"
          tagline="A premium AI health coach that remembers everything about you — built from concept to TestFlight in 30 days using dual agentic frameworks."
          tags={['iOS', 'AI Agents', 'FastAPI', 'Claude', 'SwiftUI', 'Supabase']}
          stats={[
            { label: 'Development', value: '30 Days' },
            { label: 'iOS Phases', value: '19' },
            { label: 'Backend Tests', value: '465' },
            { label: 'Health Metrics', value: '16' },
          ]}
        />

        {/* Overview */}
        <ProjectSection label="Overview" title="The Product">
          <div className="max-w-3xl">
            <p className="font-sans text-body-lg text-text-secondary leading-relaxed mb-6">
              Memotive is a conversational iOS app where an AI coach provides deeply personalized nutrition, fitness, and wellness guidance. Unlike generic fitness trackers that rely on forms and dashboards, Memotive&rsquo;s coach <em>remembers</em> everything — every dietary restriction, every preference, every goal — through a semantic memory system powered by pgvector and VoyageAI embeddings.
            </p>
            <p className="font-sans text-body text-text-muted leading-relaxed mb-6">
              Users interact through natural conversation. They can snap photos of meals for instant macro analysis, sync 16 Apple Health metrics for context-aware coaching, and journal their progress — all without filling out a single form. The coach streams responses word-by-word via SSE and intelligently routes between Claude Sonnet (complex reasoning) and Haiku (routine tasks) to keep per-user costs at $4–6/month.
            </p>
            <p className="font-sans text-body text-text-muted leading-relaxed">
              The entire product — native iOS app, FastAPI backend, Supabase database with RLS policies, Railway deployment, StoreKit 2 subscriptions, and Sentry monitoring — was built from zero to TestFlight in 30 days by a solo developer using agentic coding workflows.
            </p>
          </div>
        </ProjectSection>

        {/* Agentic Workflow */}
        <ProjectSection label="Agentic Workflow" title="How It Was Built">
          <div className="max-w-3xl mb-10">
            <p className="font-sans text-body-lg text-text-secondary leading-relaxed mb-8">
              Memotive used two distinct agentic frameworks, each optimized for its codebase. A central CLAUDE.md document coordinated both, with optional critic and auditor agents challenging assumptions and verifying acceptance criteria.
            </p>
          </div>

          {/* Paul Framework */}
          <div className="mb-12">
            <h3 className="font-serif text-h2 font-light text-text-primary mb-2">
              Paul Framework <span className="text-accent">(iOS)</span>
            </h3>
            <p className="font-sans text-body text-text-muted mb-6 max-w-3xl leading-relaxed">
              A Plan-Apply-Unify loop for structured SwiftUI development. 19 phases completed across 4 milestones (v1.0–v4.0), each with explicit acceptance criteria and autonomous execution.
            </p>
            <div className="max-w-3xl">
              <AgenticStep
                number="01"
                title="Plan"
                description="Each phase begins with a PLAN.md containing YAML frontmatter (phase ID, plan number, dependencies, files to modify) and BDD-style acceptance criteria (AC-1 through AC-N). The plan is designed to be Claude-executable without clarifying questions."
              />
              <AgenticStep
                number="02"
                title="Apply"
                description="Claude executes the plan autonomously — implementing features, running verification, and auto-fixing issues as they arise. No manual intervention between plan and completion."
              />
              <AgenticStep
                number="03"
                title="Unify"
                description="A mandatory close-the-loop step that generates a SUMMARY.md documenting what actually happened: acceptance criteria results, decisions made (with rationale), deviations from plan, and readiness for the next phase."
              />
            </div>
          </div>

          {/* GSD Framework */}
          <div className="mb-12">
            <h3 className="font-serif text-h2 font-light text-text-primary mb-2">
              GSD Framework <span className="text-accent">(Backend)</span>
            </h3>
            <p className="font-sans text-body text-text-muted mb-6 max-w-3xl leading-relaxed">
              A &ldquo;Get Shit Done&rdquo; framework for rapid Python iteration with a decision tree that routes tasks by complexity: direct edits for single-file bugs, quick mode for 2–3 file changes, and full research-plan-execute cycles for features touching 4+ files.
            </p>
          </div>

          {/* Agent Teams */}
          <div>
            <h3 className="font-serif text-h2 font-light text-text-primary mb-2">
              Cross-Repo Agent Teams
            </h3>
            <p className="font-sans text-body text-text-muted mb-6 max-w-3xl leading-relaxed">
              For cross-cutting features, agent teams were spun up with explicit roles: a &ldquo;brain&rdquo; agent building the backend (GSD), an &ldquo;iOS&rdquo; agent building the UI (Paul), an optional critic challenging assumptions during planning, and an optional auditor verifying acceptance criteria post-implementation.
            </p>
          </div>
        </ProjectSection>

        {/* Key Features */}
        <ProjectSection label="Shipped Features" title="What Was Built">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <div>
              <h4 className="font-serif text-h3 font-light text-accent mb-3">Live Streaming Chat</h4>
              <p className="font-sans text-body text-text-muted leading-relaxed">
                SSE-streamed word-by-word responses with smart model routing — Claude Sonnet for complex coaching, Haiku for routine tasks. Includes offline fallback and demo mode.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-h3 font-light text-accent mb-3">Semantic Memory</h4>
              <p className="font-sans text-body text-text-muted leading-relaxed">
                6 memory categories (restrictions, preferences, patterns, context, motivation, milestones) with pgvector semantic search and keyword fallback. The coach never forgets.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-h3 font-light text-accent mb-3">Photo Meal Logging</h4>
              <p className="font-sans text-body text-text-muted leading-relaxed">
                iMessage-style photo staging with multi-image support (up to 10), per-item macro tracking, and meal deduplication. All integrated naturally into the chat flow.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-h3 font-light text-accent mb-3">Apple Health Integration</h4>
              <p className="font-sans text-body text-text-muted leading-relaxed">
                Reads 16 HealthKit metrics including sleep breakdown, HRV, VO2 max, blood oxygen, and menstrual tracking. Anomaly detection flags concerning changes automatically.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-h3 font-light text-accent mb-3">StoreKit 2 Subscriptions</h4>
              <p className="font-sans text-body text-text-muted leading-relaxed">
                Full in-app purchase flow with PaywallView, transaction restoration, and App Store Server Notifications v2 webhook for real-time subscription lifecycle management.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-h3 font-light text-accent mb-3">Cost-Optimized AI</h4>
              <p className="font-sans text-body text-text-muted leading-relaxed">
                Prompt caching delivers ~60% token savings. Real-time cost tracking with a $1.00/day per-user cap. Smart routing between models keeps the target at $4–6/month per active user.
              </p>
            </div>
          </div>
        </ProjectSection>

        {/* Tech Stack */}
        <ProjectSection label="Technology" title="Tech Stack">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 max-w-4xl">
            <div>
              <h4 className="font-serif text-h3 font-light text-text-primary mb-4">Frontend (iOS)</h4>
              <TechItem name="Swift + SwiftUI" detail="iOS 17+, @Observable state management" />
              <TechItem name="Supabase Auth" detail="JWT, Apple Sign In, email/password" />
              <TechItem name="HealthKit" detail="16 metric types with anomaly detection" />
              <TechItem name="StoreKit 2" detail="In-app purchases and subscription lifecycle" />
              <TechItem name="Sentry" detail="Crash reporting and performance monitoring" />
            </div>
            <div>
              <h4 className="font-serif text-h3 font-light text-text-primary mb-4">Backend</h4>
              <TechItem name="FastAPI" detail="Async Python, structured logging" />
              <TechItem name="Claude (Anthropic)" detail="Sonnet + Haiku with prompt caching" />
              <TechItem name="Supabase + pgvector" detail="PostgreSQL, RLS, semantic search" />
              <TechItem name="VoyageAI" detail="voyage-4 embeddings for memory retrieval" />
              <TechItem name="Railway" detail="Auto-deploy on push to main" />
            </div>
          </div>
        </ProjectSection>

        {/* Living Documentation */}
        <ProjectSection label="Process" title="Living Documentation">
          <div className="max-w-3xl">
            <p className="font-sans text-body-lg text-text-secondary leading-relaxed mb-6">
              Every session updated three synchronized documents that kept the project coherent across dozens of coding sessions with Claude:
            </p>
            <div className="space-y-6">
              <div>
                <h4 className="font-sans text-body font-medium text-text-primary mb-1">SESSION_LOG.md</h4>
                <p className="font-sans text-body text-text-muted leading-relaxed">
                  A 92KB living document tracking what&rsquo;s working, what&rsquo;s broken, and what changed in each session — with code blocks, status badges, and detailed rationale.
                </p>
              </div>
              <div>
                <h4 className="font-sans text-body font-medium text-text-primary mb-1">TASKS.md</h4>
                <p className="font-sans text-body text-text-muted leading-relaxed">
                  A 72KB prioritized task queue with 50+ tasks, each containing problem statement, implementation approach, acceptance criteria, edge cases, and dependencies.
                </p>
              </div>
              <div>
                <h4 className="font-sans text-body font-medium text-text-primary mb-1">CONVENTIONS.md</h4>
                <p className="font-sans text-body text-text-muted leading-relaxed">
                  Golden rules that must never be broken: &ldquo;Coach is human&rdquo; (never break character), &ldquo;Memories are poker cards&rdquo; (internal only), cost tracking is mandatory, tool changes span both repos.
                </p>
              </div>
            </div>
          </div>
        </ProjectSection>
      </main>
      <CTAFooter />
    </>
  );
}
