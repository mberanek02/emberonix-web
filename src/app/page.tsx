'use client';

import dynamic from 'next/dynamic';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Capabilities } from '@/components/Capabilities';
import { Process } from '@/components/Process';
import { Resume } from '@/components/Resume';
import { About } from '@/components/About';
import { CTAFooter } from '@/components/CTAFooter';

const BackgroundParticles = dynamic(
  () => import('@/components/BackgroundParticles').then((m) => m.BackgroundParticles),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <BackgroundParticles />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <Capabilities />
        <Process />
        <Resume />
        <About />
      </main>
      <CTAFooter />
    </>
  );
}
