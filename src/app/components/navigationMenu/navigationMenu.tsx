import { navItems } from '@/constants/constants';
import { Link } from '@/i18n/routing';
import { useLocale } from 'next-intl';

export const NavigationMenu = () => {
  const locale = useLocale() as Locale;

  return (
    <nav className="flex items-center space-x-4">
      {navItems.map((item) => (
        <Link
          key={item.label.en}
          href={item.href}
          className="text-light font-normal text-sm hover:text-yellowHover"
        >
          {item.label[locale]}
        </Link>
      ))}
    </nav>
  );
};
