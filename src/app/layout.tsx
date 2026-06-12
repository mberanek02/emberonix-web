import type { Metadata } from 'next';
import { Bebas_Neue, Geist, Martian_Mono, Instrument_Serif, Syne } from 'next/font/google';
import { GrainOverlay } from '@/components/GrainOverlay';
import { SmoothScroll } from '@/components/v2/SmoothScroll';
import { Cursor } from '@/components/v2/Cursor';
import './globals.css';

// Display — Bebas Neue (uppercase brutalist monument)
const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-display',
  display: 'swap',
});

// Wordmark — Syne (the EMBERONIX logotype only)
const syne = Syne({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

// Body — Geist
const geist = Geist({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-sans',
  display: 'swap',
});

// Mono — Martian Mono (labels, data, system voice)
const martian = Martian_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
  display: 'swap',
});

// Serif accent — Instrument Serif italic (the human counterpoint)
const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['italic'],
  variable: '--font-serif',
  display: 'swap',
});

const SITE_DESCRIPTION =
  'Design-forward websites for small businesses and production-grade agentic AI systems for companies — designed, built, and shipped end-to-end by one engineer with 20 years of experience.';

export const metadata: Metadata = {
  metadataBase: new URL('https://emberonix.com'),
  title: 'Emberonix — Sites That Sell. Agents That Ship.',
  description: SITE_DESCRIPTION,
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png', sizes: '64x64' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Emberonix — Sites That Sell. Agents That Ship.',
    description: SITE_DESCRIPTION,
    url: '/',
    siteName: 'Emberonix',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emberonix — Sites That Sell. Agents That Ship.',
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${syne.variable} ${geist.variable} ${martian.variable} ${instrument.variable}`}
    >
      <body className="bg-bg text-text-primary font-sans antialiased">
        <SmoothScroll>{children}</SmoothScroll>
        <Cursor />
        <GrainOverlay />
      </body>
    </html>
  );
}
