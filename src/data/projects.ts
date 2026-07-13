export type ProjectLob = 'agentic' | 'design';

/** Hard separation between work done for paying clients and Emberonix's own products. */
export type ProjectKind = 'client' | 'product';

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description?: string;
  tags: string[];
  /** Which line of business this project belongs to — drives card color */
  lob: ProjectLob;
  /** client = built for a client; product = own product, built and shipped solo */
  kind: ProjectKind;
  caseStudyUrl?: string;
  techUrl?: string;
  liveUrl: string;
  featured: boolean;
  image?: string;
  imageStyle?: 'screenshot' | 'icon';
  /** When true, icon-style projects get a subtle scale-pulse + amber halo
   * (good for health/AI projects where "alive / heartbeat" reads thematically). */
  pulse?: boolean;
  stats?: { label: string; value: string }[];
  /** One factual outcome/scope line for the client showcase — no invented metrics. */
  outcome?: string;
}

export const projects: Project[] = [
  /* ── Client work — web design & build ── */
  {
    id: 'kents',
    name: "Kent's Sport & Pawn",
    tagline:
      'Custom e-commerce site for a family-owned firearms, safe, and pawn business in Ogden, Utah — designed, built, and shipped end-to-end.',
    description:
      'A polished storefront for a non-technical owner who needed a real online presence. Custom product catalog with UUIDs, Browning authorized-dealer pages, FFL transfer info, police-seized auction listings — all mobile-first, brand-cohesive, and conversion-focused.',
    tags: ['Web Design', 'E-commerce', 'Local SEO', 'Next.js', 'Small Business'],
    lob: 'design',
    kind: 'client',
    outcome:
      'Took a firearms, safe & pawn shop from no real web presence to a full custom catalog — Browning authorized-dealer pages, FFL transfer info, and police-seized auction listings — built mobile-first with local SEO so nearby buyers actually find it.',
    liveUrl: 'https://kentssportsandpawn.com',
    featured: false,
    image: '/images/projects/kents-hero.png',
    imageStyle: 'screenshot',
    stats: [
      { label: '', value: 'Custom product catalog system' },
      { label: '', value: 'Browning authorized-dealer pages' },
      { label: '', value: 'Local SEO + structured data' },
      { label: '', value: 'Police-seized auction listings' },
    ],
  },
  {
    id: 'revive-resume',
    name: 'Revive Resume LLC',
    tagline:
      'Premium brand site for an executive resume-writing studio — full design system, service pages, and template gallery, shipped end-to-end.',
    description:
      'A boutique web presence for a career-branding consultancy run by a top-3 national technical recruiter. Bespoke editorial design system, six service pages, filterable ATS-safe resume template gallery, client success stories, and consultation-driven CTAs throughout — built to read premium, not transactional.',
    tags: ['Web Design', 'Brand System', 'SEO', 'Next.js', 'Small Business'],
    lob: 'design',
    kind: 'client',
    outcome:
      'Gave a boutique resume studio a premium editorial brand site: six conversion-focused service pages and a filterable, ATS-safe template gallery — structured for search so the studio gets found, and built to read premium, not transactional.',
    liveUrl: 'https://www.reviveresumellc.com',
    featured: false,
    image: '/images/projects/revive-hero.png',
    imageStyle: 'screenshot',
    stats: [
      { label: '', value: 'Bespoke editorial design system' },
      { label: '', value: 'Filterable ATS-safe template gallery' },
      { label: '', value: 'SEO-structured, fast service pages' },
      { label: '', value: 'Six service pages, conversion-focused' },
    ],
  },

  {
    id: 'breathe-mission',
    name: 'Breathe Mission',
    tagline:
      'Editorial brand site for an astrology-as-diagnostic-tool practice — cosmic hero, natal-chart motion system, and a full content redesign.',
    description:
      "A visually rich web presence for Ishmael Heru-Bey's practice, which frames astrology as pattern recognition, behavioral analysis, and identity reprogramming. Kept the clinical charcoal/bone/orange identity but rebuilt the site as an editorial experience: a server-rendered SVG natal-chart hero that draws itself in, scroll-reveal choreography across every route, and a motion system gated by a single reduced-motion switch with a full no-JS fallback.",
    tags: ['Web Design', 'Brand System', 'Next.js', 'SEO', 'Small Business'],
    lob: 'design',
    kind: 'client',
    outcome:
      'Took a content-strong but visually flat practitioner site and rebuilt it as an editorial experience — an animated natal-chart hero and scroll-reveal motion across all eight pages — while keeping the clinical charcoal/bone/orange identity and shipping accessible (reduced-motion + no-JS) and fast.',
    liveUrl: 'https://www.breathemission.com',
    featured: false,
    image: '/images/projects/breathemission-hero-v2.png',
    imageStyle: 'screenshot',
    stats: [
      { label: '', value: 'Server-rendered SVG natal-chart hero' },
      { label: '', value: 'Scroll-reveal motion system' },
      { label: '', value: 'Reduced-motion + no-JS fallback' },
      { label: '', value: 'Editorial redesign, all 8 routes' },
    ],
  },

  /* ── Own products — built and shipped solo ── */
  {
    id: 'memotive',
    name: 'Memotive',
    tagline:
      'Premium AI health coach that remembers everything — zero to TestFlight in 30 days.',
    description:
      'Conversational iOS app where an AI coach provides personalized nutrition, fitness, and wellness guidance. Semantic memory means the coach never forgets a preference, restriction, or goal. Photo meal logging, Apple Health across 16 metrics, SSE-streamed chat — all on a FastAPI backend with intelligent model routing.',
    tags: ['iOS', 'AI Agents', 'FastAPI', 'Claude'],
    lob: 'agentic',
    kind: 'product',
    caseStudyUrl: '/projects/memotive',
    techUrl: '/projects/memotive/tech',
    liveUrl: 'https://apps.apple.com/app/id6760320845',
    featured: false,
    image: '/images/projects/memotive-monogram.png',
    imageStyle: 'icon',
    stats: [
      { label: '', value: 'Persistent multi-session memory' },
      { label: '', value: 'Vision-based macro extraction' },
      { label: '', value: 'Behavioral pattern detection' },
      { label: '', value: '16-metric Apple Health sync' },
    ],
  },
  {
    id: 'propertyhq',
    name: 'PropertyHQ',
    tagline:
      'Modular SaaS for contractors — estimates, scheduling, invoicing, client portal. Solo build with structured agentic workflows.',
    description:
      'Full-stack Next.js platform where contractors activate trade-specific modules (Flip, Renovations, HVAC, Plumbing) and get a complete job management system. AI assistant (Rex) with 17+ tools, Stripe Connect, QuickBooks sync, customer portal, proactive insights — all built solo using structured agent frameworks.',
    tags: ['Next.js', 'SaaS', 'AI Assistant', 'Stripe'],
    lob: 'agentic',
    kind: 'product',
    caseStudyUrl: '/projects/propertyhq',
    techUrl: '/projects/propertyhq/tech',
    liveUrl: 'https://propertyhq.org',
    featured: false,
    image: '/images/projects/propertyhq-dashboard.png',
    stats: [
      { label: '', value: 'Trade-specific module architecture' },
      { label: '', value: 'Confirm-before-act AI tooling' },
      { label: '', value: 'Magic-link client portal' },
      { label: '', value: 'Bilingual with parity enforcement' },
    ],
  },
  {
    id: 'pupdates',
    name: 'Pup Play Dates',
    tagline:
      'Social iOS app for dog owners — park discovery, QR-based connections, play date scheduling.',
    description:
      'Dog-first social iOS app where parks, connections, and play dates revolve around your pup. Nearby park discovery with community ratings, QR-code peer connections, meetup coordination — built offline-first for the real world.',
    tags: ['iOS', 'SwiftUI', 'Supabase', 'Social'],
    lob: 'design',
    kind: 'product',
    caseStudyUrl: '/projects/pupdates',
    techUrl: '/projects/pupdates/tech',
    liveUrl: 'https://apps.apple.com/app/id6757728006',
    featured: false,
    image: '/images/projects/pupdates-icon.png',
    imageStyle: 'icon',
    stats: [
      { label: '', value: 'Dog-first identity model' },
      { label: '', value: 'QR-based peer connection' },
      { label: '', value: 'Community-verified venue system' },
      { label: '', value: 'Offline-first with async sync' },
    ],
  },
];
