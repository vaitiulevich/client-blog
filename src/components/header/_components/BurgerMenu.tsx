'use client';
import { useState } from 'react';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import close from '@assets/icons/close.png';
import open from '@assets/icons/burger-menu.svg';

import { Link } from '@/i18n/routing';
import { navItems } from '@/constants/constants';
import { LocaleSwitch } from '@/components/localeSwitcher/LocaleSwitcher';
import { VideoModalButton } from '@/components/videoModalButton/videoModalButton';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale() as Locale;

  const openMenu = () => {
    setIsOpen(true);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden relative z-50 flex items-center">
      <LocaleSwitch />
      <button onClick={openMenu} className="h-4 focus:outline-none">
        <Image src={open} alt={'open'} className="h-4" />
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-lightBG text-dark flex flex-col p-8 items-end transition-opacity duration-300">
          <div>
            <button onClick={closeMenu} className="focus:outline-none">
              <Image src={close} alt={'close'} />
            </button>
          </div>
          <nav className="flex flex-col space-y-4 w-full text-center">
            {navItems.map((item) => (
              <Link
                key={item.label.en}
                href={item.href}
                className=" border-b-2 pb-3 hover:border-b-yellow"
                onClick={closeMenu}
              >
                {item.label[locale]}
              </Link>
            ))}

            <VideoModalButton />
          </nav>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
