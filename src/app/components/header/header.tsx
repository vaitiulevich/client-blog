import { Button } from 'clients-blogs-ui-kit';
import { useTranslations } from 'next-intl';
import { NavigationMenu } from '../navigationMenu/navigationMenu';
import { LocaleSwitche } from '../localeSwitcher/LocaleSwitcher';

export const Header = () => {
  const t = useTranslations('header');
  return (
    <header className="bg-darkBG text-light wrapper-component font-inter shadow">
      <div className="flex justify-between items-center h-16">
        <div className="flex-shrink-0">
          <h1 className="text-xl font-bold">{t('logoTitle')}</h1>
        </div>
        <div className="flex items-center gap-4">
          {/* <div className="hidden md:block"> */}
          <LocaleSwitche />
          <NavigationMenu />
          <Button label={t('videoButtonTitle')} backgroundColor="bg-light" />
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
