import { useTranslations } from 'next-intl';

import { PostListItem } from './PostListItem';

import { Link } from '@/i18n/routing';
interface PostsListProps {
  posts: Post[];
}
export const PostsList = ({ posts }: PostsListProps) => {
  const t = useTranslations('allPosts.postList');
  return (
    <div className="w-[40%] max-md:w-full">
      <div className="text-end flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">{t('title')}</h2>
        <Link className="text-purpure" href="/blog/page/1">
          {t('linkAll')}
        </Link>
      </div>
      <div className="flex flex-col justify-between h-[90%]">
        {posts.map(async (post) => (
          <PostListItem post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};
