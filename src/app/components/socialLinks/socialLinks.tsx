import { Link } from '@/i18n/routing';
import { SocialIcon } from 'clients-blogs-ui-kit';

interface SocialLinksProps {
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  facebook?: string;
  bgColor?: 'light' | 'dark';
}
export const SocialLinks = ({
  instagram,
  twitter,
  linkedin,
  facebook,
  bgColor = 'dark',
}: SocialLinksProps) => {
  return (
    <div className="flex gap-4">
      <Link href={instagram ?? '#'}>
        <SocialIcon bgColor={bgColor} name={'instagram'} />
      </Link>
      <Link href={twitter ?? '#'}>
        <SocialIcon bgColor={bgColor} name={'twitter'} />
      </Link>
      <Link href={linkedin ?? '#'}>
        <SocialIcon bgColor={bgColor} name={'linkedin'} />
      </Link>
      <Link href={facebook ?? '#'}>
        <SocialIcon bgColor={bgColor} name={'facebook'} />
      </Link>
    </div>
  );
};
