import { AuthorDate } from 'clients-blogs-ui-kit';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { ButtonNavigate } from '@components/buttonNavigate/buttonNavigate';

interface postInfoBlockProps {
  post: Post;
  authorName: string;
  authorId: number;
}
export const PostInfoBlock = ({
  post,
  authorName,
  authorId,
}: postInfoBlockProps) => {
  const { id, title, category, publishDate, content } = post;
  const { subtitle } = content[0];
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <div className="w-[60%] max-md:w-[80%]">
      <p className="uppercase ">
        {t('upperHeadline')} <span className="font-extrabold">{category}</span>
      </p>
      <h2 className="text-5xl font-bold my-4 max-md:text-3xl">{title}</h2>
      <AuthorDate
        mode="dark"
        locale={locale as 'en' | 'ru'}
        date={new Date(publishDate)}
        contentAuthor={<Link href={`/author/${authorId}`}>{authorName}</Link>}
      />
      <p className="my-5">{subtitle}</p>
      <ButtonNavigate path={`/post/${id}`} text={t('readMoreButtonTitle')} />
    </div>
  );
};
