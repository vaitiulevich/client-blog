import { Link } from '@/i18n/routing';
import { Button } from 'clients-blogs-ui-kit';
import { useTranslations, useLocale } from 'next-intl';
import { LocaleSwitcher } from '../localeSwitcher/LocaleSwitcher';
const navItems = [
  { label: { en: 'Home', ru: 'Главная' }, href: '/' },
  { label: { en: 'Blog', ru: 'Блог' }, href: '#' },
  { label: { en: 'About Us', ru: 'О нас' }, href: '/about' },
  { label: { en: 'Contact us', ru: 'Контакты' }, href: '#' },
  {
    label: { en: 'Privacy Policy', ru: 'Наша Политика' },
    href: '/policy',
  },
];

type Locale = 'en' | 'ru';

export const Header = () => {
  const t = useTranslations('header');
  const locale = useLocale() as Locale;

  return (
    <header className="bg-darkBG text-light font-inter shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">{t('logoTitle')}</h1>
          </div>
          <div className="hidden md:block">
            <nav className="flex items-center space-x-4">
              <LocaleSwitcher />

              {navItems.map((item) => (
                <Link
                  key={item.label.en}
                  href={item.href}
                  className="text-light font-normal text-sm hover:text-yellowHover"
                >
                  {item.label[locale]}
                </Link>
              ))}
              <Button
                label={t('videoButtonTitle')}
                backgroundColor="bg-light"
              />
            </nav>
          </div>
          {/* <div className="hidden md:block">
          <nav className="flex items-center space-x-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-light font-normal text-sm hover:text-yellowHover"
              >
                {item.label}
              </a>
            ))}
            {buttonLabel && (
              <Button
                label={buttonLabel}
                backgroundColor="bg-light"
                onClick={buttonOnClick}
              />
            )}
          </nav>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <img className="h-4" src={closeBurgerMenu} alt="close" />
            ) : (
              <img className="h-4" src={burgerMenu} alt="open" />
            )}
          </button>
        </div> */}
        </div>
      </div>
      {/* {isOpen && (
      <div className="md:hidden h-full bg-lightBG">
        <nav className="flex flex-col h-full space-y-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-4 py-2 text-dark hover:bg-gray-200"
            >
              {item.label}
            </a>
          ))}
          {buttonLabel && (
            <Button
              label={buttonLabel}
              backgroundColor="bg-light"
              onClick={buttonOnClick}
            />
          )}
        </nav>
      </div>
    )} */}
    </header>
  );
};
