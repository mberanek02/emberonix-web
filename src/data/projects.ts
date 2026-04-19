export interface Project {
  id: string;
  name: string;
  tagline: string;
  description?: string;
  tags: string[];
  caseStudyUrl: string;
  techUrl?: string;
  liveUrl: string;
  featured: boolean;
  image?: string;
  imageStyle?: 'screenshot' | 'icon';
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
    techUrl: '/projects/memotive/tech',
    liveUrl: 'https://apps.apple.com/app/id6760320845',
    featured: true,
    image: '/images/projects/memotive-icon.png',
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
      'A modular SaaS platform for contractors — estimates, scheduling, invoicing, and a client portal, purpose-built using structured agentic workflows.',
    description:
      'A full-stack Next.js platform where contractors activate trade-specific modules (Flip, Renovations, HVAC, Plumbing) and get a complete job management system. Features an AI assistant (Rex) with 17+ tools, Stripe Connect payments, QuickBooks sync, a customer portal, and a proactive insights engine — all built by a solo developer using structured agent frameworks.',
    tags: ['Next.js', 'SaaS', 'AI Assistant', 'Stripe'],
    caseStudyUrl: '/projects/propertyhq',
    techUrl: '/projects/propertyhq/tech',
    liveUrl: 'https://propertyhq.org',
    featured: true,
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
      'A social app for dog owners — park discovery, QR-based connections, and play date scheduling, built with structured agentic workflows.',
    description:
      'A dog-first social iOS app where parks, connections, and play dates revolve around your pup. Discover nearby dog parks with community ratings, connect instantly via QR codes, and coordinate meetups — designed for real-world use with offline support built in.',
    tags: ['iOS', 'SwiftUI', 'Supabase', 'Agentic Development'],
    caseStudyUrl: '/projects/pupdates',
    techUrl: '/projects/pupdates/tech',
    liveUrl: 'https://apps.apple.com/app/id6757728006',
    featured: true,
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
