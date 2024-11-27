import { PostListItemProps } from '../AllPostsSection.types';

import { AuthorDatePanel } from '@/components/AuthorDatePanel/AuthorDatePanel';
import { Link } from '@/i18n/routing';

export const PostListItem = async ({ post }: PostListItemProps) => {
  const { title, publishDate, id } = post;

  const date = new Date(publishDate);
  return (
    <div className="p-4 hover:bg-yellowOpasity  transition duration-300 ease-in-out cursor-pointer flex flex-col jastify-center gap-2">
      <AuthorDatePanel authorId={id} date={date} />
      <Link href={`/post/${id}`}>
        <h3 className="text-xl font-semibold mt-1">{title}</h3>
      </Link>
    </div>
  );
};
