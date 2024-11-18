import Image from 'next/image';
import { AuthorDatePanel } from '@app/components/AuthorDatePanel/AuthorDatePanel';
import { useTranslations } from 'next-intl';
import { Button } from 'clients-blogs-ui-kit';

interface FeaturedPostProps {
  post: Post;
}
export const FeaturedPost = ({ post }: FeaturedPostProps) => {
  const t = useTranslations('allPosts.featuredPost');
  const { banner, title, authorId, publishDate, content } = post;
  const { subtitle } = content[0];
  return (
    <div className="w-[50%]">
      <h2 className="text-2xl font-bold mb-8">{t('title')}</h2>
      <div className="p-6 border-solid border-[0.5px]">
        <div className="relative h-[17rem]">
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={banner}
            alt={title}
            layout="fill"
            priority
          />
        </div>

        <div className="flex flex-col gap-4 items-start mt-4">
          <AuthorDatePanel authorId={authorId} date={new Date(publishDate)} />
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm text-grey">{subtitle}</p>
          <Button label={t('moreButtonTitle')} isNavigate={true} />
        </div>
      </div>
    </div>
  );
};
