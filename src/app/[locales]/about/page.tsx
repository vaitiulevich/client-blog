import { IntroSection } from './_components/IntroSection';
import { AboutSection } from './_components/AboutSection';
import { JoinSection } from '@/app/components/joinSection/joinSection';

export default function PrivacyPolicy() {
  return (
    <div className="font-sen wrapper-component">
      <IntroSection />
      <AboutSection />
      <JoinSection />
    </div>
  );
}
