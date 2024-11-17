'use client';

import { LocaleSwitcher } from 'clients-blogs-ui-kit';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

const locales = [
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
];

export const LocaleSwitche = () => {
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
