import { Hero } from '@app/components/hero/hero';
import { JoinSection } from '@app/components/joinSection/joinSection';
import { AuthorsList } from '@app/components/authorsList/authorsList';
import { AllPostsSection } from '@app/components/allPostsSection/allPostsSection';
import { countAuthorsHome } from '@/constants/constants';
import { FilasofyPanel } from '../components/filasofyPanel/filasofyPanel';
import { HrPanel } from '../components/hrPanel/hrPanel';
import { useTranslations } from 'next-intl';
import { ReasonsSection } from '../components/reasonsSection/reasonsSection';
import { FeaturedListSection } from '../components/featuredListSection/featuredListSection';
import { CategoryList } from '../components/categoryList/categoryList';
const filasofyKeys = ['AboutUs', 'OurMision'];

export default function Home() {
  const t = useTranslations('home');
  return (
    <div className="font-dark">
      <Hero />
      <AllPostsSection />
      <div className="wrapper-component flex flex-col items-end my-24">
        <div className="w-[70%]">
          <HrPanel />
        </div>
        <FilasofyPanel
          filasofyKeys={filasofyKeys}
          translationPath={'home.filosofy'}
          firstLink={{
            text: t('filosofy.AboutUs.moreButtonTitle'),
            href: '/about',
          }}
        />
      </div>
      <div className="wrapper-component my-24">
        <h2 className="text-2xl font-bold mb-12 text-center">
          {t('categoryTitle')}
        </h2>
        <CategoryList />
      </div>
      <ReasonsSection />

      <AuthorsList limit={countAuthorsHome} />
      <FeaturedListSection />
      <JoinSection />
    </div>
  );
}
