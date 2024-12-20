import { PostListItem } from './_components/PostListItem';
import { PostsListProps } from './PostsList.types';

export const PostsList = ({ posts }: PostsListProps) => {
  if (!posts.length) {
    return (
      <div className="doublewrap-component text-2xl font-semibold">
        No results
      </div>
    );
  }
  return (
    <div>
      {posts.map((post) => (
        <PostListItem post={post} key={post.id} />
      ))}
    </div>
  );
};
