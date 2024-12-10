import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { FAQ } from '@/components/sections/FAQ';
import { Features } from '@/components/sections/features';
import { CTASection } from '@/components/sections/cta-section';

export default function HomePage() {
  return (
    <main className="overflow-hidden flex flex-col justify-center ">
      <Hero />
      <Services />
      <Features></Features>
      <FAQ />
      <CTASection></CTASection>
    
    </main>
  );
}