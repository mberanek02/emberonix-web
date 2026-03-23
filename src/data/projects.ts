export interface Project {
  id: string;
  name: string;
  tagline: string;
  description?: string;
  tags: string[];
  caseStudyUrl: string;
  liveUrl: string;
  featured: boolean;
  image?: string;
  stats?: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    id: 'memotive',
    name: 'Memotive',
    tagline:
      'Premium AI health coach that remembers everything — built from zero to TestFlight in 30 days.',
    description:
      'A conversational iOS app where an AI coach provides personalized nutrition, fitness, and wellness guidance. Semantic memory means the coach never forgets a preference, restriction, or goal. Photo-based meal logging, Apple Health integration across 16 metrics, and SSE-streamed chat — all powered by a FastAPI backend with intelligent model routing.',
    tags: ['iOS', 'AI Agents', 'FastAPI', 'Claude'],
    caseStudyUrl: '/projects/memotive',
    liveUrl: '#',
    featured: true,
    stats: [
      { label: 'Development', value: '30 Days' },
      { label: 'iOS Phases', value: '19' },
      { label: 'Backend Tests', value: '465' },
      { label: 'Health Metrics', value: '16' },
    ],
  },
  {
    id: 'propertyhq',
    name: 'PropertyHQ',
    tagline:
      'Modular SaaS platform for contractors — 38 phases, 160+ plans, 82K lines of TypeScript shipped with agentic workflows.',
    description:
      'A full-stack Next.js platform where contractors activate trade-specific modules (Flip, Renovations, HVAC, Plumbing) and get a complete job management system. Features an AI assistant (Rex) with 17+ tools, Stripe Connect payments, QuickBooks sync, a customer portal, and a proactive insights engine — all built by a solo developer using structured agent frameworks.',
    tags: ['Next.js', 'SaaS', 'AI Assistant', 'Stripe'],
    caseStudyUrl: '/projects/propertyhq',
    liveUrl: '#',
    featured: true,
    image: '/images/projects/propertyhq-dashboard.png',
    stats: [
      { label: 'Plans Shipped', value: '160+' },
      { label: 'Source Files', value: '548' },
      { label: 'LOC', value: '82K' },
      { label: 'Trade Modules', value: '4' },
    ],
  },
  {
    id: 'pupdates',
    name: 'Pup Play Dates',
    tagline:
      'Dog park social app — 109 steps from concept to App Store using contract-driven Claude Code development.',
    description:
      'An iOS app that helps dog owners find parks, connect via QR codes, and schedule play dates. Built with SwiftUI and a Supabase backend using an incremental step-based agentic workflow where every feature was specified, implemented, and verified through Claude Code. Includes 1,064 passing tests across 44 test files.',
    tags: ['iOS', 'SwiftUI', 'Supabase', 'Claude Code'],
    caseStudyUrl: '/projects/pupdates',
    liveUrl: '#',
    featured: false,
    image: '/images/projects/pupdates-home.png',
    stats: [
      { label: 'Steps Shipped', value: '109+' },
      { label: 'Tests Passing', value: '1,064' },
      { label: 'Test Files', value: '44' },
      { label: 'Security Items', value: '9' },
    ],
  },
];
