import { useTranslations } from 'next-intl';
import { Hero } from '../components/hero/hero';
import { JoinSection } from '../components/joinSection/joinSection';

export default function Home() {
  const t = useTranslations();
  return (
    <div className="">
      <Hero />
      <h1>{t('welcome')}</h1>
      <JoinSection />
    </div>
  );
}
