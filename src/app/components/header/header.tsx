import { useTranslations } from 'next-intl';
import { NavigationMenu } from '../navigationMenu/navigationMenu';
import { LocaleSwitch } from '../localeSwitcher/LocaleSwitcher';
import { VideoModalButton } from '../videoModalButton/videoModalButton';
import BurgerMenu from './_components/BurgerMenu';

export const Header = () => {
  const t = useTranslations('header');

  return (
    <header className="bg-darkBG text-light wrapper-component font-inter shadow">
      <div className="flex justify-between items-center h-16">
        <div className="flex-shrink-0">
          <h1 className="text-xl font-bold">{t('logoTitle')}</h1>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <LocaleSwitch />
          <NavigationMenu />
          <VideoModalButton />
        </div>
        <div className="md:hidden">
          <BurgerMenu />
        </div>
      </div>
    </header>
  );
};
