import { endpoints } from '@/constants/endpoints';
import { apiRequest } from './apiRequest';

export const fetchPosts = async (): Promise<Post[]> => {
  return apiRequest<Post[]>(endpoints.posts);
};

export const fetchPostById = async (id: number): Promise<Post> => {
  return apiRequest<Post>(`${endpoints.posts}/${id}`);
};

export const fetchPostsWithLimit = async (limit: number): Promise<Post[]> => {
  return apiRequest<Post[]>(`${endpoints.postsWithLimit}${limit}`);
};

export const fetchPostsByCategory = async (
  category: string,
  limit: number
): Promise<Post[]> => {
  return apiRequest<Post[]>(
    `${endpoints.posts}?category=${category}&_limit=${limit}`
  );
};

export const fetchAuthorsPosts = async (id: number): Promise<Post[]> => {
  return apiRequest<Post[]>(`${endpoints.postsByAuthor}${id}`);
};
