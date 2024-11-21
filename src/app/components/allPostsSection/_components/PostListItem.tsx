import { fetchAuthorById } from '@/api/authors';
import { Link } from '@/i18n/routing';
import { AuthorDate } from 'clients-blogs-ui-kit';

interface PostListItemProps {
  post: Post;
}
export const PostListItem = async ({ post }: PostListItemProps) => {
  const { authorId, title, publishDate, id } = post;

  const { name } = await fetchAuthorById(authorId);
  return (
    <Link
      href={`/post/${id}`}
      className="p-4 hover:bg-yellowOpasity  transition duration-300 ease-in-out cursor-pointer"
    >
      <AuthorDate author={name} date={new Date(publishDate)} />
      <h3 className="text-xl font-semibold mt-1">{title}</h3>
    </Link>
  );
};
