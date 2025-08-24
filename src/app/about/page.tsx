import type { Metadata } from 'next';
import { Team } from '@/components/app/team';
import { MotionWrapper } from '@/components/app/motion-wrapper';

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: 'HashVerify ekibiyle tanışın. Veri güvenliği ve bütünlüğü konusundaki tutkumuzu paylaşan profesyonelleriz.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-16">
      <MotionWrapper>
        <Team />
      </MotionWrapper>
    </div>
  );
}
