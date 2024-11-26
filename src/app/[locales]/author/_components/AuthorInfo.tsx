import { HrPanel } from '@components/hrPanel/hrPanel';
import { SocialLinks } from '@/components/socialLinks/socialLinks';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import TypingAnimation from './TypingAnimation';

interface AuthorHeaderProps {
  author: Author;
}

export const AuthorInfo = ({ author }: AuthorHeaderProps) => {
  const t = useTranslations('author');
  const { name, avatar, description, instagramm, facebook, twitter, linkedin } =
    author;
  return (
    <>
      <div className="py-16 flex justify-between items-center gap-8 max-md:flex-col max-md:p-4">
        <div className="relative h-[15rem] w-[30%] max-md:w-full">
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={avatar}
            alt={name}
            width={400}
            height={400}
            priority
          />
        </div>
        <div className="w-[65%] h-min-full max-md:w-full">
          <div className="min-h-20">
            <h2 className="text-4xl font-bold">
              <TypingAnimation
                text={t('title', { name }).toString()}
                speed={100}
              />
            </h2>
          </div>
          <p className="text-sm text-grey my-5">{description}</p>
          <SocialLinks
            instagram={instagramm}
            twitter={twitter}
            facebook={facebook}
            linkedin={linkedin}
          />
        </div>
      </div>

      <HrPanel />
    </>
  );
};
