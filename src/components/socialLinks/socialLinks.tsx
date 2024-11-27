import { SocialIcon } from 'clients-blogs-ui-kit';

import { SocialLinksProps } from './SocialLinks.types';

import { Link } from '@/i18n/routing';

export const SocialLinks = ({
  instagram,
  twitter,
  linkedin,
  facebook,
  bgColor = 'dark',
}: SocialLinksProps) => {
  const medias: {
    href: string | undefined;
    name: 'instagram' | 'twitter' | 'linkedin' | 'facebook';
  }[] = [
    {
      name: 'instagram',
      href: instagram,
    },
    {
      name: 'twitter',
      href: twitter,
    },
    {
      name: 'linkedin',
      href: linkedin,
    },
    {
      name: 'facebook',
      href: facebook,
    },
  ];

  const renderSocialLinks = () => {
    return medias.map((item) => {
      const { href, name } = item;
      return (
        <Link
          key={item.name}
          href={href ?? '#'}
          className="transition-transform duration-300 ease-in-out transform hover:-translate-y-0.5"
        >
          <SocialIcon
            bgColor={bgColor}
            name={name}
            className="transition-transform duration-300 ease-in-out transform hover:-translate-y-0.5"
          />
        </Link>
      );
    });
  };

  return <div className="flex gap-4">{renderSocialLinks()}</div>;
};
