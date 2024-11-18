import { Hero } from '@app/components/hero/hero';
import { JoinSection } from '@app/components/joinSection/joinSection';
import { AuthorsList } from '@app/components/authorsList/authorsList';
import { AllPostsSection } from '@app/components/allPostsSection/allPostsSection';
import { countAuthorsHome } from '@/constants/constants';

export default function Home() {
  return (
    <div className="font-dark">
      <Hero />
      <AllPostsSection />
      <AuthorsList limit={countAuthorsHome} />
      <JoinSection />
    </div>
  );
}
