import { countAuthorsHome } from '@/constants/constants';
import { HrPanel } from '@components/hrPanel/hrPanel';
import { homeFilasofyKeys } from '@/constants/filasofy';
import { useTranslations } from 'next-intl';
import { LazySection } from '@components/LazySection/LazySection';
import { Hero } from '@/components/hero/hero';
import { AllPostsSection } from '@/components/allPostsSection/allPostsSection';
import dynamic from 'next/dynamic';

const LazyFilasofyPanel = dynamic(() =>
  import('@components/filasofyPanel/filasofyPanel').then(
    (mod) => mod.FilasofyPanel
  )
);
const LazyCategoryList = dynamic(() =>
  import('@components/categoryList/categoryList').then(
    (mod) => mod.CategoryList
  )
);
const LazyReasonsSection = dynamic(() =>
  import('@components/reasonsSection/reasonsSection').then(
    (mod) => mod.ReasonsSection
  )
);
const LazyAuthorsList = dynamic(() =>
  import('@components/authorsList/authorsList').then((mod) => mod.AuthorsList)
);
const LazyFeaturedListSection = dynamic(() =>
  import('@components/featuredListSection/featuredListSection').then(
    (mod) => mod.FeaturedListSection
  )
);
const LazyJoinSection = dynamic(() =>
  import('@components/joinSection/joinSection').then((mod) => mod.JoinSection)
);
const LazyReviewSection = dynamic(() =>
  import('@/components/reviewSection/reviewSection').then(
    (mod) => mod.ReviewSection
  )
);

export default function Home() {
  const t = useTranslations('home');

  const sections = [
    { id: 1, component: <Hero /> },
    { id: 2, component: <AllPostsSection /> },
    {
      id: 3,
      component: (
        <div className="wrapper-component flex flex-col items-end my-24">
          <div className="w-[70%]">
            <HrPanel />
          </div>
          <LazyFilasofyPanel
            filasofyKeys={homeFilasofyKeys}
            translationPath={'home.filosofy'}
            firstLink={{
              text: t('filosofy.AboutUs.moreButtonTitle'),
              href: '/about',
            }}
          />
        </div>
      ),
    },
    {
      id: 4,
      component: (
        <div className="wrapper-component my-24">
          <h2 className="text-2xl font-bold mb-12 text-center">
            {t('categoryTitle')}
          </h2>
          <LazyCategoryList />
        </div>
      ),
    },
    { id: 5, component: <LazyReasonsSection /> },
    { id: 6, component: <LazyAuthorsList limit={countAuthorsHome} /> },
    { id: 7, component: <LazyFeaturedListSection /> },
    { id: 8, component: <LazyReviewSection /> },
    { id: 9, component: <LazyJoinSection /> },
  ];

  return (
    <div className="font-dark">
      {sections.map((section) => (
        <LazySection key={section.id}>{section.component}</LazySection>
      ))}
    </div>
  );
}
