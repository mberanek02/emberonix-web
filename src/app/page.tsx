import { Preloader } from '@/components/v2/Preloader';
import { NavV2 } from '@/components/v2/NavV2';
import { HeroV2 } from '@/components/v2/HeroV2';
import { Manifesto } from '@/components/v2/Manifesto';
import { PracticesSplit } from '@/components/v2/PracticesSplit';
import { WorkGallery } from '@/components/v2/WorkGallery';
import { AgenticSystems } from '@/components/v2/AgenticSystems';
import { ProductsV2 } from '@/components/v2/ProductsV2';
import { HowItWorks } from '@/components/v2/HowItWorks';
import { FooterV2 } from '@/components/v2/FooterV2';

export default function Home() {
  return (
    <>
      <Preloader />
      <NavV2 />
      <main className="relative">
        <HeroV2 />
        <Manifesto />
        <PracticesSplit />
        <WorkGallery />
        <AgenticSystems />
        <ProductsV2 />
        <HowItWorks />
      </main>
      <FooterV2 />
    </>
  );
}
