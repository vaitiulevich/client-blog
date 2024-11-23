import { countOfAllPosts } from '@/constants/constants';
import { FeaturedPost } from './_components/FeaturedPost';
import { PostsList } from './_components/PostsList';
import { fetchPostsWithLimit } from '@/api/posts';

export const AllPostsSection = async () => {
  const posts = await fetchPostsWithLimit(countOfAllPosts);

  return (
    <section className="wrapper-component my-16 flex gap-4 justify-between font-sen max-md:flex-col-reverse">
      <FeaturedPost post={posts[1]} />
      <PostsList posts={posts} />
    </section>
  );
};
