import { useTranslations } from 'next-intl';

export default function PrivacyPolicy() {
  const t = useTranslations('policy');

  return (
    <section className="font-sen">
      <div className="bg-lavanderBG flex flex-col items-center min-h-[10rem] justify-center wrapper-component text-center ">
        <h2 className="text-dark text-4xl font-bold max-md:text-2xl">
          {t('headline')}
        </h2>
        <p className="text-grey mt-2 text-sm font-thin">{t('subStatus')}</p>
      </div>
      <div className="py-5 doublewrap-component my-20">
        <h3 className="text-dark text-4xl font-bold max-md:text-2xl">
          {t('articleTitle')}
        </h3>
        <p className="font-inter mt-8 text-grey text-sm">{t('articleP')}</p>
      </div>
    </section>
  );
}
