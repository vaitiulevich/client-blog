import { fetchPostsByCategory } from '@/api/posts';
import { RecomendedPostItem } from './_components/RecomendedPostItem';

interface RecomendedPostsProps {
  category?: string;
}
const limitOfRecomenderPosts = 3;

export const RecomendedPosts = async ({
  category = '',
}: RecomendedPostsProps) => {
  const posts = await fetchPostsByCategory(category, limitOfRecomenderPosts);
  return (
    <div className="wrapper-component my-10">
      <h2 className="text-3xl font-bold my-8">What to read next</h2>
      <div className="grid grid-cols-3 gap-6">
        {posts.map((post) => (
          <RecomendedPostItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
