import { useTranslations } from 'next-intl';

export default function PrivacyPolicy() {
  const t = useTranslations('policy');

  return (
    <section className="font-sen">
      <div className="bg-lavanderBG flex flex-col items-center min-h-[10rem] justify-center">
        <h2 className="text-dark text-4xl font-bold">{t('headline')}</h2>
        <p className="text-grey mt-2 text-sm font-thin">{t('subStatus')}</p>
      </div>
      <div className="py-5 px-[25%]">
        <h3 className="text-dark text-4xl font-bold mt-20">
          {t('articleTitle')}
        </h3>
        <p className="font-inter mt-5 text-grey text-sm">{t('articleP')}</p>
      </div>
    </section>
  );
}
