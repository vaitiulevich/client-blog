import { Link } from '@/i18n/routing';
import { SocialIcon } from 'clients-blogs-ui-kit';

interface SocialLinksProps {
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  facebook?: string;
}
export const SocialLinks = ({
  instagram,
  twitter,
  linkedin,
  facebook,
}: SocialLinksProps) => {
  return (
    <div className="flex gap-4">
      <Link href={instagram ?? '#'}>
        <SocialIcon name={'instagram'} />
      </Link>
      <Link href={twitter ?? '#'}>
        <SocialIcon name={'twitter'} />
      </Link>
      <Link href={linkedin ?? '#'}>
        <SocialIcon name={'linkedin'} />
      </Link>
      <Link href={facebook ?? '#'}>
        <SocialIcon name={'facebook'} />
      </Link>
    </div>
  );
};
