import { countAuthorsHome } from '@/constants/constants';
import { HrPanel } from '@app/components/hrPanel/hrPanel';
import { homeFilasofyKeys } from '@/constants/filasofy';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import { LazySection } from '@app/components/LazySection/LazySection';

const LazyHero = dynamic(() =>
  import('@app/components/hero/hero').then((mod) => mod.Hero)
);

const LazyAllPostsSection = dynamic(() =>
  import('@app/components/allPostsSection/allPostsSection').then(
    (mod) => mod.AllPostsSection
  )
);
const LazyFilasofyPanel = dynamic(() =>
  import('@app/components/filasofyPanel/filasofyPanel').then(
    (mod) => mod.FilasofyPanel
  )
);
const LazyCategoryList = dynamic(() =>
  import('@app/components/categoryList/categoryList').then(
    (mod) => mod.CategoryList
  )
);
const LazyReasonsSection = dynamic(() =>
  import('@app/components/reasonsSection/reasonsSection').then(
    (mod) => mod.ReasonsSection
  )
);
const LazyAuthorsList = dynamic(() =>
  import('@app/components/authorsList/authorsList').then(
    (mod) => mod.AuthorsList
  )
);
const LazyFeaturedListSection = dynamic(() =>
  import('@app/components/featuredListSection/featuredListSection').then(
    (mod) => mod.FeaturedListSection
  )
);
const LazyJoinSection = dynamic(() =>
  import('@app/components/joinSection/joinSection').then(
    (mod) => mod.JoinSection
  )
);
const LazyReviewSection = dynamic(() =>
  import('@app/components/reviewSection/reviewSection').then(
    (mod) => mod.ReviewSection
  )
);

export default function Home() {
  const t = useTranslations('home');

  return (
    <div className="font-dark">
      <LazySection>
        <LazyHero />
      </LazySection>
      <LazySection>
        <LazyAllPostsSection />
      </LazySection>
      <LazySection>
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
      </LazySection>

      <LazySection>
        <div className="wrapper-component my-24">
          <h2 className="text-2xl font-bold mb-12 text-center">
            {t('categoryTitle')}
          </h2>
          <LazyCategoryList />
        </div>
      </LazySection>
      <LazySection>
        <LazyReasonsSection />
      </LazySection>
      <LazySection>
        <LazyAuthorsList limit={countAuthorsHome} />
        <LazyFeaturedListSection />
      </LazySection>
      <LazySection>
        <LazyReviewSection />
      </LazySection>
      <LazySection>
        <LazyJoinSection />
      </LazySection>
    </div>
  );
}
