import { ContactForm } from '@components/contactForm/contactForm';
import { useTranslations } from 'next-intl';

import MapSection from './_components/MapSection';

import { contactEmail, contactPhone } from '@/constants/contacts';
import { CENTER_MAP } from '@/constants/map';

export default function Contacts() {
  const t = useTranslations('contacts');
  return (
    <section className="font-sen text-dark">
      <div className="m-auto w-[50%] py-16 max-md:w-[90%]">
        <p className="uppercase text-center font-bold">{t('upperHeadline')}</p>
        <h2 className="text-4xl text-center font-bold my-4">{t('headline')}</h2>
        <p className="text-sm text-center text-grey">{t('description')}</p>
        <div className="flex justify-between p-10 mt-14 mb-4 bg-purpure text-light max-md:flex-col max-md:gap-6">
          <div className="w-[47%] max-md:w-full">
            <p className="pb-4 border-b-[0.5px]">{t('worhingTitle')}</p>
            <h3 className="text-xl">{t('workingDaysTitle')}</h3>
            <h3 className="text-xl">{t('workingHoursTitle')}</h3>
            <p>{t('workingSupportTitle')}</p>
          </div>
          <div className="w-[47%] max-md:w-full">
            <p className="pb-4 border-b-[0.5px]">{t('contactTitle')}</p>
            <h3 className="text-xl">{contactPhone}</h3>
            <p>{contactEmail}</p>
          </div>
        </div>
        <ContactForm />
      </div>
      <MapSection center={CENTER_MAP} />
    </section>
  );
}
