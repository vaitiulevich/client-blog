import { fetchPostsWithLimit } from '@/api/posts';
import { RecomendedPostItem } from './_components/RecomendedPostItem';
import { limitOfRecomenderPosts } from '@/constants/constants';
import { Translation } from '@app/components/translation/Translation';

interface RecomendedPostsProps {
  excludedPostId?: number;
}

export const RecomendedPosts = async ({
  excludedPostId,
}: RecomendedPostsProps) => {
  const posts = await fetchPostsWithLimit(limitOfRecomenderPosts + 1);

  const filteredPosts = posts.filter((post) => post.id !== excludedPostId);
  filteredPosts.slice(0, 3);
  return (
    <div className="wrapper-component my-10">
      <h2 className="text-3xl font-bold my-8">
        <Translation section={'recomended'} name={'title'} />
      </h2>

      <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
        {filteredPosts.map((post) => (
          <RecomendedPostItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
