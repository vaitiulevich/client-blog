import { AuthorDate } from 'clients-blogs-ui-kit';
import { ButtonNavigate } from '../buttonNavigate/buttonNavigate';
import { useTranslations } from 'next-intl';

interface postInfoBlockProps {
  post: Post;
  authorName: string;
}
export const PostInfoBlock = ({ post, authorName }: postInfoBlockProps) => {
  const { id, title, category, publishDate, content } = post;
  const { subtitle } = content[0];
  const t = useTranslations('hero');

  return (
    <div className="w-[60%] max-md:w-[80%]">
      <p className="uppercase ">
        {t('upperHeadline')} <span className="font-extrabold">{category}</span>
      </p>
      <h2 className="text-5xl font-bold my-4 max-md:text-3xl">{title}</h2>
      <AuthorDate
        mode="dark"
        author={authorName}
        date={new Date(publishDate)}
      />
      <p className="my-5">{subtitle}</p>
      <ButtonNavigate path={`/post/${id}`} text={t('readMoreButtonTitle')} />
    </div>
  );
};
