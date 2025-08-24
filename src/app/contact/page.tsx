import type { Metadata } from 'next';
import { ContactForm } from '@/components/app/contact-form';
import { MotionWrapper } from '@/components/app/motion-wrapper';

export const metadata: Metadata = {
  title: 'İletişim',
  description: 'Bizimle iletişime geçin. Soru, öneri veya işbirliği talepleriniz için buradayız.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-16">
      <MotionWrapper>
        <ContactForm />
      </MotionWrapper>
    </div>
  );
}
