import { Link } from '@/i18n/routing';
import { useLocale } from 'next-intl';
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
