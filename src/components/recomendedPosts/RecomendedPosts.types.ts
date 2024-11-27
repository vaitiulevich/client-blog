import { Post } from '@/api/types/post';

export interface RecomendedPostsProps {
  excludedPostId?: number;
}
export interface RecomendedPostItemProps {
  post: Post;
}
