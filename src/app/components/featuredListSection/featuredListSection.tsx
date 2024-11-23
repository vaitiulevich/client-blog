import { featured } from '@/constants/featured';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export const FeaturedListSection = () => {
  const t = useTranslations('featuredSection');
  return (
    <section className="sponsors-section wrapper-component flex items-center justify-between my-16 max-md:flex-col">
      <div className="w-[10%] text-grey max-md:w-full">
        <p>{t('upperHeadline')}</p>
        <h2 className="text-xl text-nowrap font-bold mb-4">{t('headline')}</h2>
      </div>
      <div className="flex flex-wrap justify-between gap-2 w-[80%] max-md:w-full">
        {Object.entries(featured).map(([key, logo]) => (
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
        ))}
      </div>
    </section>
  );
};
