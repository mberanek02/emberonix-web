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

export default function PropertyHQTechPage() {
  return (
    <>
      <BackgroundParticles />
      <Navbar />
      <main className="relative z-10">
        <ProjectHero
          name="PropertyHQ"
          tagline="A modular SaaS platform for contractors — estimates, scheduling, invoicing, and a client portal, purpose-built using structured agentic workflows."
          tags={['Next.js', 'SaaS', 'AI Assistant', 'Stripe', 'Prisma', 'TypeScript']}
          stats={[
            { label: 'Trade Modules', value: '4' },
            { label: 'AI Assistant Tools', value: '17+' },
            { label: 'Trade Categories', value: '66' },
            { label: 'Report Types', value: '50+' },
          ]}
        />

        {/* Overview */}
        <ProjectSection label="Overview" title="The Product">
          <div className="max-w-3xl">
            <p className="font-sans text-body-lg text-text-secondary leading-relaxed mb-6">
              PropertyHQ is a modular SaaS platform where construction and property service businesses subscribe to trade-specific modules and get a complete job management system tailored to their trade. Any contractor can sign up, activate only the modules they need (Flip, Renovations, HVAC, or Plumbing), and immediately have scheduling, budgeting, invoicing, and task management built for how they actually work.
            </p>
            <p className="font-sans text-body text-text-muted leading-relaxed mb-6">
              The platform includes Rex, an AI assistant with 17+ tools that can parse receipts, generate estimates, manage documents, answer budget questions, and create tasks — all with a confirm-before-acting pattern so data is never silently mutated. A customer portal lets end-clients view project timelines, approve invoices, and communicate with contractors through magic-link authentication.
            </p>
            <p className="font-sans text-body text-text-muted leading-relaxed">
              Every line of the 82K LOC codebase was written through structured agentic development — Plan-Apply-Unify for features, GSD for research, and parallel agent teams for cross-module work. The project demonstrates what a single developer can ship when AI-assisted workflows are treated as a serious engineering discipline.
            </p>
          </div>
        </ProjectSection>

        {/* Agentic Workflow */}
        <ProjectSection label="Agentic Workflow" title="How It Was Built">
          <div className="max-w-3xl mb-10">
            <p className="font-sans text-body-lg text-text-secondary leading-relaxed mb-8">
              PropertyHQ is the most complete demonstration of agentic development at scale. The project used a decision tree to route every task to the right workflow based on complexity, and parallel agent teams to ship cross-module features simultaneously.
            </p>
          </div>

          {/* Decision Tree */}
          <div className="mb-12">
            <h3 className="font-serif text-h2 font-light text-text-primary mb-6">
              Task Routing Decision Tree
            </h3>
            <div className="max-w-3xl">
              <AgenticStep
                number="01"
                title="Tiny — Direct Edit"
                description="Single-file typos, missing imports, config tweaks. No framework ceremony needed — just fix it."
              />
              <AgenticStep
                number="02"
                title="Small — GSD Quick"
                description="2–3 file changes with well-understood scope. Fast execution tracked in STATE.md with atomic commits."
              />
              <AgenticStep
                number="03"
                title="Medium — Paul (Plan-Apply-Unify)"
                description="Standard feature work. Every plan has YAML frontmatter, BDD acceptance criteria, file boundaries, and an autonomous flag. 160+ plans shipped this way."
              />
              <AgenticStep
                number="04"
                title="Large — Paul + Research"
                description="Architectural changes preceded by GSD research phases. Deep codebase mapping before planning begins."
              />
              <AgenticStep
                number="05"
                title="Parallel — Agent Teams"
                description="Cross-module features shipped by multiple agents simultaneously: module-parallel (same feature across Flip/Reno/HVAC/Plumbing), layer-parallel (data + UI in parallel), or investigation teams racing to root-cause issues."
              />
            </div>
          </div>

          {/* Quality Gates */}
          <div>
            <h3 className="font-serif text-h2 font-light text-text-primary mb-6">
              Quality Gates
            </h3>
            <div className="max-w-3xl">
              <p className="font-sans text-body text-text-muted leading-relaxed mb-4">
                Medium and large features passed through additional verification layers. A Devil&rsquo;s Advocate agent challenged assumptions during planning and reviewed implementations for edge cases. An Auditor agent verified acceptance criteria were met post-implementation. Pre-commit hooks enforced i18n parity across English and Spanish translations on every commit.
              </p>
              <p className="font-sans text-body text-text-muted leading-relaxed">
                Every plan&rsquo;s SUMMARY.md documented deviations from the original plan, auto-fixed issues, and decisions made with rationale — creating an audit trail that future sessions could reference for architectural context.
              </p>
            </div>
          </div>
        </ProjectSection>

        {/* Modules */}
        <ProjectSection label="Architecture" title="Modular by Design">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mb-10">
            <div>
              <h4 className="font-serif text-h3 font-light text-accent mb-3">Flip Module</h4>
              <p className="font-sans text-body text-text-muted leading-relaxed">
                Property flipping with portfolio management, budget tracking with 100+ cost code presets, transaction ledger, and task management with photo-required completion for construction verification.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-h3 font-light text-accent mb-3">Renovations Module</h4>
              <p className="font-sans text-body text-text-muted leading-relaxed">
                Client-based remodeling with estimates, selections management, change orders, and a complete invoice lifecycle (Draft → Sent → Paid) with Stripe Connect payment processing.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-h3 font-light text-accent mb-3">HVAC Module</h4>
              <p className="font-sans text-body text-text-muted leading-relaxed">
                Service and install jobs with scope builder, scheduling, and invoicing. Designed for HVAC contractors who need to manage both maintenance calls and larger installation projects.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-h3 font-light text-accent mb-3">Plumbing Module</h4>
              <p className="font-sans text-body text-text-muted leading-relaxed">
                Distinct job and customer models built for plumbing contractors, sharing the platform&rsquo;s scheduling, invoicing, and task infrastructure while maintaining trade-specific workflows.
              </p>
            </div>
          </div>
        </ProjectSection>

        {/* Key Platform Features */}
        <ProjectSection label="Platform" title="Cross-Module Features">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <div>
              <h4 className="font-serif text-h3 font-light text-accent mb-3">Rex AI Assistant</h4>
              <p className="font-sans text-body text-text-muted leading-relaxed">
                17+ owner tools for receipt parsing, budget Q&A, task/vendor/client creation, estimate generation, and document management. 7 foreman tools for field work. Confirm-before-acting pattern, core memories, rate limiting, and org-scoped Zod validation.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-h3 font-light text-accent mb-3">Financial Pipeline</h4>
              <p className="font-sans text-body text-text-muted leading-relaxed">
                End-to-end invoicing with Stripe Connect (ACH + card), QuickBooks sync with AES-256 encrypted tokens and auto-refresh, public invoice approval pages, and estimate-to-invoice conversion across all modules.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-h3 font-light text-accent mb-3">Customer Portal</h4>
              <p className="font-sans text-body text-text-muted leading-relaxed">
                Magic-link authenticated portal where end-clients view project timelines, approve invoices, browse photo galleries, and message their contractor — all without creating an account.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-h3 font-light text-accent mb-3">Proactive Insights</h4>
              <p className="font-sans text-body text-text-muted leading-relaxed">
                18 owner insights and 5 foreman insights generated deterministically (zero LLM calls) — overdue tasks, budget overruns, stale jobs, worker overload, pipeline health, and expense spikes with i18n templates.
              </p>
            </div>
          </div>
        </ProjectSection>

        {/* Tech Stack */}
        <ProjectSection label="Technology" title="Tech Stack">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 max-w-4xl">
            <div>
              <h4 className="font-serif text-h3 font-light text-text-primary mb-4">Frontend</h4>
              <TechItem name="Next.js 16" detail="App Router, Server Components, Server Actions" />
              <TechItem name="TypeScript (strict)" detail="548 source files, Zod validation" />
              <TechItem name="Tailwind + shadcn/ui" detail="Radix primitives, Lucide icons" />
              <TechItem name="next-intl" detail="EN/ES with pre-commit parity enforcement" />
              <TechItem name="Framer Motion" detail="Animations and page transitions" />
            </div>
            <div>
              <h4 className="font-serif text-h3 font-light text-text-primary mb-4">Backend & Infra</h4>
              <TechItem name="Prisma" detail="18-file multi-schema, soft deletes" />
              <TechItem name="NextAuth v5" detail="Google OAuth, JWT refresh rotation" />
              <TechItem name="Stripe" detail="Subscriptions, Connect, webhook lifecycle" />
              <TechItem name="Sentry" detail="All 3 runtimes, source maps, tunnel route" />
              <TechItem name="Upstash Redis" detail="Rate limiting, per-org token buckets" />
            </div>
          </div>
        </ProjectSection>

        {/* Development Timeline */}
        <ProjectSection label="Timeline" title="Development History">
          <div className="max-w-3xl">
            <div className="space-y-4">
              {[
                { version: 'v1.0', phases: '1–9', plans: '61', date: 'Jan 2025', desc: 'Core platform — auth, modules, budgets, tasks, dashboard' },
                { version: 'v2.0', phases: '10–15', plans: '34', date: 'Feb 2026', desc: 'Modularization — trade-specific modules, foreman portal' },
                { version: 'v2.1', phases: '16', plans: '8', date: 'Feb 2026', desc: 'Plumbing module — fourth trade vertical' },
                { version: 'v3.0', phases: '17–22', plans: '17', date: 'Feb 2026', desc: 'Task-forward UX — polymorphic tasks, photo-required completion' },
                { version: 'v4.0', phases: '27–29', plans: '12', date: 'Feb 2026', desc: 'Notifications, scheduling, owner/foreman calendars' },
                { version: 'v5.0', phases: '30–36', plans: '20', date: 'Mar 2026', desc: 'Financial pipeline — Stripe Connect, QuickBooks, customer portal' },
                { version: 'Rex', phases: '37–38', plans: 'Ongoing', date: 'Mar 2026', desc: 'AI assistant — 17+ tools, security hardening, core memories' },
              ].map((milestone) => (
                <div key={milestone.version} className="flex gap-6 py-4 hairline-b">
                  <div className="shrink-0 w-16">
                    <span className="font-serif text-body-lg font-light text-accent">{milestone.version}</span>
                  </div>
                  <div className="flex-1">
                    <span className="font-sans text-body text-text-primary">{milestone.desc}</span>
                    <div className="flex gap-4 mt-1">
                      <span className="text-caption text-text-muted font-sans">Phases {milestone.phases}</span>
                      <span className="text-caption text-text-muted font-sans">{milestone.plans} plans</span>
                      <span className="text-caption text-text-muted font-sans">{milestone.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ProjectSection>
      </main>
      <CTAFooter />
    </>
  );
}
