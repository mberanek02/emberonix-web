'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from './ScrollReveal';

/* ─── Resume Data ─── */

const contact = {
  location: 'Charlotte, NC',
  phone: '704.957.7266',
  email: 'mberanek02@gmail.com',
  linkedin: '#',
};

const summary =
  'Senior Software Engineer with 20+ years of experience architecting, engineering, and delivering scalable, high-performance enterprise applications across financial services, logistics, SaaS, and retail. Expert in .NET, C#, distributed systems, API design, and UI modernization. Adept at transforming complex business requirements into robust technical solutions that elevate reliability, accelerate delivery, and enable growth. Leverages AI-assisted development and generative AI tools to streamline coding, automate testing, optimize engineering workflows, and drive measurable productivity gains.';

const skills: { label: string; items: string }[] = [
  { label: 'Languages', items: 'C#, JavaScript, SQL, HTML5, CSS3, Python' },
  { label: 'Frameworks', items: '.NET Core, .NET Framework, ASP.NET MVC, Blazor, React, Entity Framework, LINQ' },
  { label: 'Architecture', items: 'REST APIs, Microservices, Distributed Systems, Design Patterns, SOLID, Legacy Modernization' },
  { label: 'Cloud & DevOps', items: 'Azure (App Insights, Monitor, Service Bus, SQL), Azure DevOps, Docker, Kubernetes, ACR, Git, CI/CD' },
  { label: 'AI', items: 'Generative AI, Agentic AI, Automation Workflows, AI-Assisted Development' },
  { label: 'Agile', items: 'Scrum, Kanban, Sprint Planning, Backlog Refinement, Iterative Delivery' },
];

const achievements = [
  'Enabled mobile warehouse operations across ten high-volume facilities, resulting in thousands of orders processed daily with reduced handling time per shift.',
  'Engineered backend infrastructure that positioned a cloud-native platform to accommodate thousands of enterprise users, enabling seamless growth.',
  'Modernized core financial applications, improving accuracy across high-volume transaction workflows and removing dozens of manual steps from daily operations.',
];

interface Role {
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

const experience: Role[] = [
  {
    title: 'Senior Engineer Consultant',
    company: 'Endava Inc.',
    location: 'Charlotte, NC',
    period: 'March 2022 \u2013 November 2025',
    bullets: [
      'Senior Consultant leading enterprise-grade .NET modernizations and UI transformation initiatives through the full SDLC in an Agile/Scrum environment.',
      'Modernized a complex WinForms warehouse management system into mobile-ready Blazor interfaces, enabling real-time workflows for frontline warehouse personnel.',
      'Increased workflow efficiency across 10+ high-volume distribution centers by redesigning end-to-end UI flows and engineering backend services.',
      'Engineered and optimized RESTful APIs powering a distributed, multi-database warehouse ecosystem, improving data consistency and cross-system integration.',
      'Collaborated within a 20+ person engineering organization, aligning with QA, UX, Product, and DevOps to deliver cohesive, production-ready features on schedule.',
      'Shaped long-term modernization strategy for complex .NET 4.x systems, guiding architectural direction and reducing future technical debt.',
    ],
  },
  {
    title: 'Lead Backend Developer \u2014 Microservices Architecture',
    company: 'Endava Inc.',
    location: 'Charlotte, NC',
    period: '',
    bullets: [
      'Championed backend engineering for a financial-services SaaS platform built on .NET Core and Azure, steering architectural direction and technical delivery.',
      'Engineered and orchestrated 10+ microservices, establishing API contracts, service boundaries, integration patterns, and data-flow architectures.',
      'Cultivated talent across junior and mid-level engineers by shaping coding standards, conducting in-depth PR reviews, and providing technical mentorship.',
      'Instrumented .NET microservices with Azure Application Insights for request, dependency, exception, and trace telemetry with Kubernetes pod-level traceability.',
      'Built event-driven integrations using Azure Service Bus (topics/subscriptions), wiring publishers/subscribers for asynchronous workflows.',
      'Influenced and co-designed Azure DevOps CI/CD pipelines to build Docker images, publish to ACR, and promote releases across Kubernetes environments.',
    ],
  },
  {
    title: 'Senior Software Engineer',
    company: 'Wells Fargo',
    location: 'Charlotte, NC',
    period: '2009 \u2013 2022',
    bullets: [
      'Engineered and stewarded nine mission-critical applications supporting municipal bond traders and sales teams in fast-paced market environments.',
      'Devised unified UI solutions incorporating permission-based access, multi-system integrations, advanced reporting, and internal content management.',
      'Revitalized multiple legacy ASP.NET applications by transitioning to MVC and React architectures powered by RESTful APIs and C# services.',
      'Reconstructed a legacy Python reconciliation engine into an MVC + Entity Framework application, boosting accuracy and long-term maintainability.',
      'Directed unit testing, user acceptance testing, and documentation initiatives ensuring smooth delivery across major release cycles.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Insignia Group',
    location: 'Rock Hill, SC',
    period: '2007 \u2013 2009',
    bullets: [
      'Led front-end engineering for a .NET 3.5 automotive accessories catalog adopted by dealerships nationwide.',
      'Upgraded the UI with AJAX-driven interactions, modular JavaScript components, and dealership-specific theming.',
      'Synthesized a .NET backend with a Flash-based vehicle configurator, implementing geometric image-layer logic for dynamic vehicle renderings.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Lending Tree',
    location: 'Charlotte, NC',
    period: '2006 \u2013 2007',
    bullets: [
      'Crafted and deployed 15+ financial calculators in ASP.NET and VB.NET, enabling customers to evaluate loan options with clarity.',
      'Built .NET tooling consuming external mortgage rate feeds from Freddie Mac RSS for timely financial data.',
      'Managed a third-party CMS supporting ongoing content operations and smoother marketing workflows.',
    ],
  },
];

const aiExperience = [
  'Leverage AI-assisted development as a force multiplier, using LLMs (ChatGPT, Claude, Copilot) to accelerate code generation, refactoring, architecture validation, and debugging.',
  'Apply advanced prompt engineering with Claude Code and ChatGPT to drive full-stack development and rapidly prototype complex solutions.',
  'Engineer agentic automation pipelines in n8n for multi-step AI task execution, API orchestration, and end-to-end automated workflows.',
  'Utilize RAG concepts including vector search, embeddings, and retrieval optimization to embed AI-assisted features into .NET and JavaScript services.',
  'Explore multi-agent architectures enabling intelligent task delegation, chain-of-thought workflows, and AI-driven decision support.',
];

const aiProjects = [
  { name: 'AI-Assisted .NET Refactoring', desc: 'Used Claude Code + ChatGPT to modernize legacy service layers and auto-generate clean C# abstractions.' },
  { name: 'AI-Driven API Doc Generator', desc: 'Built an n8n + ChatGPT workflow to convert C# controllers into structured API documentation.' },
  { name: 'Automated Unit Test Generator', desc: 'Pipeline using Claude + custom prompts to generate NUnit/XUnit-style tests for service classes.' },
  { name: 'Multi-Agent Feature Planner', desc: 'Prompt-chained workflow decomposing feature requests into engineering tasks, acceptance criteria, and architecture notes.' },
  { name: 'Lightweight RAG Experiments', desc: 'Python + Langchain with Chroma and Postgres + PGVector for domain-specific question answering from project docs.' },
  { name: 'Coding Companion Workflows', desc: 'Integrated LLMs into VS Code for on-demand code translation, design feedback, and live troubleshooting.' },
];

const education = 'University of North Carolina at Chapel Hill \u2014 Bachelor of Science in Computer Science';

/* ─── Components ─── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6 pt-10 first:pt-0">
      <div className="accent-line-sm" />
      <h3 className="mono-label text-accent">
        {children}
      </h3>
    </div>
  );
}

function RoleBlock({ role }: { role: Role }) {
  return (
    <div className="mb-10 last:mb-0">
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-3">
        <div>
          <h4 className="font-display uppercase text-2xl text-text-primary">
            {role.title}
          </h4>
          <p className="font-mono text-xs text-text-muted uppercase tracking-wider mt-1">
            {role.company} · {role.location}
          </p>
        </div>
        {role.period && (
          <span className="font-mono text-xs text-text-muted uppercase tracking-wider shrink-0">
            {role.period}
          </span>
        )}
      </div>
      <ul className="space-y-2 ml-4 mt-4">
        {role.bullets.map((b, i) => (
          <li
            key={i}
            className="text-body text-text-secondary font-sans leading-relaxed relative pl-5 before:content-['▸'] before:absolute before:left-0 before:top-0 before:text-accent before:text-sm"
          >
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── Main Section ─── */

export function Resume() {
  const [open, setOpen] = useState(false);

  return (
    <section id="resume" className="px-6 md:px-12 lg:px-16 py-20 md:py-28 bg-bg-subtle hairline-t">
      <div className="mx-auto max-w-container">
        {/* Section header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div>
              <span className="mono-label text-accent block mb-4">
                // 07 / BACKGROUND
              </span>
              <h2 className="font-display uppercase text-h2 md:text-h1 text-text-primary">
                Operator Record
              </h2>
            </div>
            <button
              onClick={() => setOpen(!open)}
              className="btn-ghost self-start md:self-auto"
            >
              {open ? 'COLLAPSE' : 'VIEW FULL RESUME'}
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
              >
                <path
                  d="M2 4.5l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="accent-line mb-10" />
        </ScrollReveal>

        {/* Summary — always visible */}
        <ScrollReveal>
          <div className="max-w-3xl mb-4">
            <p className="font-display uppercase text-3xl md:text-4xl text-text-primary">
              Michael Beranek
            </p>
            <p className="font-mono text-xs text-text-muted uppercase tracking-wider mt-2 mb-6">
              {contact.location} · {contact.email}
            </p>
            <p className="text-body-lg text-text-secondary font-sans leading-relaxed">
              {summary}
            </p>
          </div>
        </ScrollReveal>

        {/* Expandable full resume */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="resume-body"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden"
            >
              <div className="max-w-3xl">
                {/* Technical Skills */}
                <SectionLabel>Technical Skills</SectionLabel>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-2">
                  {skills.map((s) => (
                    <div key={s.label} className="border-l border-hairline pl-4">
                      <span className="mono-label text-accent">
                        {s.label}
                      </span>
                      <p className="text-small text-text-secondary font-sans mt-1">
                        {s.items}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Recent Achievements */}
                <SectionLabel>Recent Achievements</SectionLabel>
                <ul className="space-y-3 ml-4 mb-2">
                  {achievements.map((a, i) => (
                    <li
                      key={i}
                      className="text-body text-text-secondary font-sans leading-relaxed relative pl-5 before:content-['▸'] before:absolute before:left-0 before:top-0 before:text-accent before:text-sm"
                    >
                      {a}
                    </li>
                  ))}
                </ul>

                {/* Professional Experience */}
                <SectionLabel>Professional Experience</SectionLabel>
                {experience.map((role, i) => (
                  <RoleBlock key={i} role={role} />
                ))}

                {/* AI & Emerging Tech */}
                <SectionLabel>AI &amp; Emerging Technology</SectionLabel>
                <ul className="space-y-2 ml-4 mb-2">
                  {aiExperience.map((item, i) => (
                    <li
                      key={i}
                      className="text-body text-text-secondary font-sans leading-relaxed relative pl-5 before:content-['▸'] before:absolute before:left-0 before:top-0 before:text-accent before:text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                {/* AI Projects */}
                <SectionLabel>AI Projects</SectionLabel>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                  {aiProjects.map((p) => (
                    <div
                      key={p.name}
                      className="p-5 bg-bg-card border border-hairline hover:border-accent transition-colors duration-300"
                    >
                      <h4 className="font-display uppercase text-lg text-text-primary mb-2">
                        {p.name}
                      </h4>
                      <p className="text-small text-text-secondary font-sans leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Education */}
                <SectionLabel>Education</SectionLabel>
                <p className="text-body text-text-secondary font-sans leading-relaxed mb-4">
                  {education}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
