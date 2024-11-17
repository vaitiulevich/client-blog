import { useTranslations } from 'next-intl';
import { ButtonNavigate } from '../buttonNavigate/buttonNavigate';

export const JoinSection = () => {
  const t = useTranslations('join');
  return (
    <section className="min-h-[20rem] flex items-center justify-center">
      <div className="w-[25rem] text-center">
        <h2 className="font-bold text-3xl">{t('title')}</h2>
        <p className="text-grey my-6">{t('subTitle')}</p>
        <ButtonNavigate path={'/contacts'} text={t('joinButtonTitle')} />
      </div>
    </section>
  );
};
