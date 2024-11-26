import { navItems } from '@/constants/constants';
import { Link } from '@/i18n/routing';
import { useLocale } from 'next-intl';

export const NavigationMenu = () => {
  const locale = useLocale() as Locale;

  const renderLinks = () => {
    return navItems.map((item) => {
      const { label, href } = item;
      return (
        <Link
          key={label.en}
          href={href}
          className="text-light font-normal text-sm hover:text-yellowHover"
        >
          {label[locale]}
        </Link>
      );
    });
  };
  return <nav className="flex items-center space-x-4">{renderLinks()}</nav>;
};
