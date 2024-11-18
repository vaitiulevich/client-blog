import { fetchAuthorById } from '@/api/authors';
import { Link } from '@/i18n/routing';
import { AuthorDate } from 'clients-blogs-ui-kit';
import { useTranslations } from 'next-intl';
interface PostsListProps {
  posts: Post[];
}
export const PostsList = ({ posts }: PostsListProps) => {
  const t = useTranslations('allPosts.postList');
  return (
    <div className="w-[40%]">
      <div className="text-end flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">{t('title')}</h2>
        <Link className="text-purpure" href="/blog">
          {t('linkAll')}
        </Link>
      </div>
      <div className="flex flex-col justify-between h-[90%]">
        {posts.map(async (post) => {
          const { name } = await fetchAuthorById(post.authorId);
          return (
            <div
              key={post.id}
              className="p-4 hover:bg-yellowOpasity cursor-pointer"
            >
              <AuthorDate author={name} date={new Date(post.publishDate)} />
              <h3 className="text-xl font-semibold mt-1">{post.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};
