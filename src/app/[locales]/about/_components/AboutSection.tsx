import { useTranslations } from 'next-intl';
import Image from 'next/image';

import teamImg from '@/../public/assets/teamImg.png';
import reasonImg from '@/../public/assets/reasonImg.png';

export const AboutSection = () => {
  const t = useTranslations('about.aboutSection');

  return (
    <section className=" wrapper-component">
      <div className="flex items-center justify-between my-16 max-md:p-4">
        <div className="w-[45%] max-md:w-full">
          <h3 className="text-3xl font-bold">{t('aboutTeamTitle')}</h3>
          <h2 className="font-bold text-xl py-4">{t('aboutTeamSubtitle')}</h2>
          <p className="text-grey text-sm">{t('aboutTeamDescription')}</p>
        </div>
        <div className="w-[45%] relative max-md:hidden">
          <div className="bg-yellow figure-radius h-24 w-20 absolute top-20 right-[90%]"></div>
          <Image src={teamImg} alt="team" />
        </div>
      </div>
      <div className="flex items-center justify-between my-16 max-md:p-4 max-md:flex-col max-md:my-6">
        <div className="w-[45%] relative max-md:w-full">
          <Image src={reasonImg} alt="reason" />
          <div className="bg-purpure figure-circle-radius h-20 w-20 absolute bottom-[-10%] left-16 max-md:hidden"></div>
        </div>
        <div className="w-[45%] max-md:w-full">
          <h3 className="text-3xl font-bold">{t('aboutReasonTitle')}</h3>
          <h2 className="font-bold text-xl py-4">{t('aboutReasonSubtitle')}</h2>
          <p className="text-grey text-sm">{t('aboutReasonDescription')}</p>
        </div>
      </div>
    </section>
  );
};
