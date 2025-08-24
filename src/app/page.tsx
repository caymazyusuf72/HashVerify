import { Hero } from '@/components/app/hero';
import { HashTabs } from '@/components/app/hash-tabs';
import { UseCases } from '@/components/app/use-cases';
import { Faq } from '@/components/app/faq';
import { MotionWrapper } from '@/components/app/motion-wrapper';

export default function Home() {
  return (
    <>
      <MotionWrapper>
        <Hero />
      </MotionWrapper>
      <div className="w-full container mx-auto px-4 py-8 md:px-6 md:py-16">
        <div className="space-y-12">
          <MotionWrapper delay={0.2}>
            <HashTabs />
          </MotionWrapper>
          <MotionWrapper delay={0.4}>
            <UseCases />
          </MotionWrapper>
          <MotionWrapper delay={0.6}>
            <Faq />
          </MotionWrapper>
        </div>
      </div>
    </>
  );
}
