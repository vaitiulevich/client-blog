'use client';

import { locales } from '@/constants/constants';
// import { usePathname, useRouter } from '@/i18n/routing';
import { LocaleSwitcher } from 'clients-blogs-ui-kit';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

export const LocaleSwitch = () => {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(/^\/(en|ru)/, '');
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <LocaleSwitcher
      locales={locales}
      onLocaleChange={handleLocaleChange}
      current={currentLocale}
    />
  );
};
