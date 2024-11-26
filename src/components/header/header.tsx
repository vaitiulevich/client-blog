import { useTranslations } from 'next-intl';
import { NavigationMenu } from '@components/navigationMenu/navigationMenu';
import { LocaleSwitch } from '@components/localeSwitcher/LocaleSwitcher';
import { VideoModalButton } from '@components/videoModalButton/videoModalButton';
import BurgerMenu from './_components/BurgerMenu';
import { Link } from '@/i18n/routing';

export const Header = () => {
  const t = useTranslations('header');

  return (
    <header className="bg-darkBG text-light wrapper-component font-inter shadow">
      <div className="flex justify-between items-center h-16">
        <div className="flex-shrink-0">
          <Link href="/">
            <h1 className="text-xl font-bold max-sm:text-base">
              {t('logoTitle')}
            </h1>
          </Link>
        </div>
        <div className="hidden lg:flex items-center gap-4">
          <LocaleSwitch />
          <NavigationMenu />
          <VideoModalButton />
        </div>
        <div className="lg:hidden max-lg:w-24">
          <BurgerMenu />
        </div>
      </div>
    </header>
  );
};
