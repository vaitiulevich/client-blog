import { useTranslations } from 'next-intl';
import { NavigationMenu } from '../navigationMenu/navigationMenu';
import { SocialLinks } from '../socialLinks/socialLinks';
import { SubscribeForm } from '../subscribeForm/subscribeForm';

export const Footer = () => {
  const t = useTranslations('footer');

  return (
    <footer className="bg-darkBG text-light wrapper-component font-inter shadow py-4">
      <div className="flex justify-between items-center h-16 py-12">
        <div className="flex-shrink-0">
          <h1 className="text-xl font-bold">{t('logoTitle')}</h1>
        </div>
        <div className="hidden md:block">
          <NavigationMenu />
        </div>
      </div>

      <div className="flex items-center justify-between bg-opasityBG p-16 max-md:p-4 max-md:flex-col max-md:items-start">
        <h2 className="text-3xl font-semibold w-[50%] max-md:text-start max-md:w-full max-md:mb-6 max-md:text-2xl">
          {t('formTitle')}
        </h2>
        <SubscribeForm />
      </div>

      <div className="flex justify-between items-center py-10">
        <div className="text-grey text-sm">
          <p>{t('address')}</p>
          <p>{t('contacts')}</p>
        </div>
        <SocialLinks bgColor="light" />
      </div>
    </footer>
  );
};
