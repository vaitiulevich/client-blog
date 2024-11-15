import { useTranslations } from 'next-intl';

export default function PrivacyPolicy() {
  const t = useTranslations('about');

  return (
    <section className="font-sen">
      <div className="bg-lavanderBG flex flex-col items-center min-h-[10rem] justify-center">
        <h2 className="text-dark text-4xl font-bold">{t('headline')}</h2>
      </div>
    </section>
  );
}
