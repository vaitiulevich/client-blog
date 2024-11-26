import { IntroSection } from '@app/[locales]/about/_components/IntroSection';
import { AboutSection } from '@app/[locales]/about/_components/AboutSection';
import { JoinSection } from '@components/joinSection/joinSection';
import { AuthorsList } from '@components/authorsList/authorsList';

import { countAuthorsAbout } from '@/constants/constants';

export default function PrivacyPolicy() {
  return (
    <div className="font-sen">
      <IntroSection />
      <AboutSection />
      <AuthorsList limit={countAuthorsAbout} />
      <JoinSection />
    </div>
  );
}
