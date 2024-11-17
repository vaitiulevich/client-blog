import { useTranslations } from 'next-intl';
import Image from 'next/image';
import banner from '@/../public/assets/introImg.png';

export const IntroSection = () => {
  const t = useTranslations('about.aboutIntro');
  const metricsKeys = [
    'blogsPublished',
    'viewsOnFinsweet',
    'totalActiveUsers',
  ] as const;
  const filasofyKeys = ['OurMision', 'OurVision'] as const;

  return (
    <section className="text-dark">
      <div className="flex items-center justify-between px-16 relative top-12 z-10">
        <div className="px-10 py-12 w-[50%] bg-light">
          <p className="uppercase">{t('upperHeadline')}</p>
          <h2 className="font-bold text-4xl">{t('headline')}</h2>
        </div>
        <p className="w-[40%] text-grey text-sm">{t('introDescription')}</p>
      </div>
      <div className="relative overflow-hidden min-h-[25rem] flex items-end px-16">
        <Image
          src={banner}
          alt="about banner"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="relative h-full z-3 w-[80%]">
          <div className="w-[65%] p-8 bg-yellow flex min-h-28 justify-between gap-4">
            {metricsKeys.map((key) => (
              <div
                className="flex-col text-center items-center justify-center"
                key={key}
              >
                <p className="text-5xl font-bold mb-1">
                  {t(`metrics.${key}.indicator`)}
                </p>
                <p>{t(`metrics.${key}.title`)}</p>
              </div>
            ))}
          </div>
          <div className="h-6 flex">
            <div className="w-[40%] h-full bg-purpure"></div>
            <div className="w-[60%] h-full bg-yellow"></div>
          </div>
        </div>
      </div>
      <div className="bg-lavanderBG px-16 grid grid-cols-2 gap-[10%] items-center min-h-72">
        {filasofyKeys.map((key) => (
          <div key={key}>
            <p className="w-[45%] uppercase font-semibold">
              {t(`filosofy.${key}.upperTitle`)}
            </p>
            <h3 className="font-bold text-xl py-4">
              {' '}
              {t(`filosofy.${key}.title`)}
            </h3>
            <p className="text-grey text-sm"> {t(`filosofy.${key}.content`)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
