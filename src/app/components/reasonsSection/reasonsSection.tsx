import banner from '@/../public/assets/introImg.png';
import Image from 'next/image';
import { ButtonNavigate } from '../buttonNavigate/buttonNavigate';
import { useTranslations } from 'next-intl';

export const ReasonsSection = () => {
  const t = useTranslations('aboutSection');
  return (
    <section className="wrapper-component relative flex items-end text-dark mb-24 max-md:flex-col">
      <div className="relative overflow-hidden min-h-[35rem] w-[70%] flex items-end px-16 max-md:hidden max-md:min-h-0">
        <Image
          src={banner}
          alt="about banner"
          fill
          className="object-cover max-md:hidden"
          priority
        />
      </div>
      <div className="absolute h-[80%] bg-lightBG z-3 w-[40%] right-[7rem] p-14 flex flex-col justify-between items-start gap-4 max-lg:p-8 max-md:p-2 max-md:static max-md:w-full max-md:right-0">
        <p className="uppercase font-semibold">{t('upperHeadline')}</p>
        <h3 className="font-bold text-4xl">{t('headline')}</h3>
        <p className="text-grey text-sm">{t('description')}</p>
        <ButtonNavigate path={'/about'} text={t('buttonTitle')} />
      </div>
    </section>
  );
};
