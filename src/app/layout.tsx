import type { Metadata } from 'next';
import { Cormorant, Outfit } from 'next/font/google';
import { GrainOverlay } from '@/components/GrainOverlay';
import './globals.css';

const cormorant = Cormorant({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-serif',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Emberonix — Product Engineering + Agentic AI',
  description:
    'Boutique product studio building and shipping AI-driven SaaS and iOS products. We partner with founders and teams to design, build, and launch.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png', sizes: '64x64' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Emberonix — Product Engineering + Agentic AI',
    description:
      'Boutique product studio building and shipping AI-driven SaaS and iOS products.',
    type: 'website',
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
      className={`${cormorant.variable} ${outfit.variable}`}
    >
      <body className="bg-bg text-text-primary font-sans antialiased">
        {children}
        <GrainOverlay />
      </body>
    </html>
  );
}
