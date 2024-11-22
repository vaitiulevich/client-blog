'use client';

import { locales } from '@/constants/constants';
import { LocaleSwitcher } from 'clients-blogs-ui-kit';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

export const LocaleSwitch = () => {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '');
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
