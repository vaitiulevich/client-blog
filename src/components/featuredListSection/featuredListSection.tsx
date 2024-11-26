import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { featured } from '@/constants/featured';

export const FeaturedListSection = () => {
  const t = useTranslations('featuredSection');

  const renderLogos = Object.entries(featured).map(([key, logo]) => (
    <div key={key} className="sponsor-logo relative h-16 w-32">
      <Image
        src={logo}
        alt={key}
        fill
        sizes="(max-width: 640px) 100vw,
               (max-width: 768px) 50vw,
               33vw"
        className="object-contain"
      />
    </div>
  ));

  return (
    <section className="sponsors-section wrapper-component flex items-center gap-4 justify-between my-16 max-md:flex-col">
      <div className="w-fit  text-grey max-md:w-full ">
        <p>{t('upperHeadline')}</p>
        <h2 className="text-xl text-nowrap font-bold mb-4">{t('headline')}</h2>
      </div>
      <div className="overflow-hidden w-[85%] max-md:w-full">
        <div className="flex animate-marquee whitespace-nowrap justify-between gap-3">
          {renderLogos}
          <div className="flex justify-between gap-3 max-md:hidden">
            {renderLogos}
          </div>
          ,
        </div>
      </div>
    </section>
  );
};
