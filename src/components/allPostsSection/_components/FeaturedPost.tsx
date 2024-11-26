import Image from 'next/image';
import { AuthorDatePanel } from '@components/AuthorDatePanel/AuthorDatePanel';
import { useTranslations } from 'next-intl';
import { ButtonNavigate } from '@components/buttonNavigate/buttonNavigate';

interface FeaturedPostProps {
  post: Post;
}
export const FeaturedPost = ({ post }: FeaturedPostProps) => {
  const t = useTranslations('allPosts.featuredPost');
  const { banner, title, authorId, publishDate, content, id } = post;
  const { subtitle } = content[0];
  return (
    <div className="w-[50%] max-md:w-full">
      <h2 className="text-2xl font-bold mb-8">{t('title')}</h2>
      <div className="p-6 border-solid border-[0.5px]">
        <div className="relative h-[17rem]">
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={banner}
            alt={title}
            fill
            priority
          />
        </div>

        <div className="flex flex-col gap-4 items-start mt-4">
          <AuthorDatePanel authorId={authorId} date={new Date(publishDate)} />
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm text-grey">{subtitle}</p>
          <ButtonNavigate path={`/post/${id}`} text={t('moreButtonTitle')} />
        </div>
      </div>
    </div>
  );
};
