import { useTranslations } from 'next-intl';
import Image from 'next/image';
import banner from '@/../public/assets/introImg.png';
import { HrPanel } from '@app/components/hrPanel/hrPanel';
import { FilasofyPanel } from '@/app/components/filasofyPanel/filasofyPanel';
import { filasofyKeys, metricsKeys } from '@/constants/filasofy';

export const IntroSection = () => {
  const t = useTranslations('about.aboutIntro');

  const renderMetrics = () => {
    return metricsKeys.map((key) => (
      <div
        className="flex-col text-center items-center justify-center"
        key={key}
      >
        <p className="text-5xl font-bold mb-1 max-md:text-3xl">
          {t(`metrics.${key}.indicator`)}
        </p>
        <p>{t(`metrics.${key}.title`)}</p>
      </div>
    ));
  };

  return (
    <section className="text-dark  wrapper-component">
      <div className="flex items-center justify-between px-16 relative top-12 z-10 max-md:top-0 max-md:p-4 max-md:flex-col">
        <div className="px-10 py-12 w-[50%] bg-light max-md:w-full">
          <p className="uppercase">{t('upperHeadline')}</p>
          <h2 className="font-bold text-4xl">{t('headline')}</h2>
        </div>
        <p className="w-[40%] text-grey text-sm  max-md:w-full max-md:p-4">
          {t('introDescription')}
        </p>
      </div>
      <div className="relative overflow-hidden min-h-[25rem] flex items-end px-16 max-md:p-2">
        <Image
          src={banner}
          alt="about banner"
          fill
          className="object-cover"
          priority
        />
        <div className="relative h-full z-3 w-[80%] max-md:w-full">
          <div className="w-[76%] p-8 bg-yellow flex min-h-28 justify-between gap-4 max-lg:w-fit max-md:w-full">
            {renderMetrics()}
          </div>
          <HrPanel />
        </div>
      </div>
      <FilasofyPanel
        filasofyKeys={filasofyKeys}
        translationPath={'about.aboutIntro.filosofy'}
      />
    </section>
  );
};
