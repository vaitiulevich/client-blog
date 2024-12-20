import { endpoints } from '@/constants/endpoints';
import { apiRequest } from './apiRequest';
import { Post } from './types/post';

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await apiRequest(endpoints.posts);
  return response.json();
};
export const fetchPostById = async (id: number): Promise<Post> => {
  const response = await apiRequest(`${endpoints.posts}/${id}`);
  return response.json();
};
export const fetchPostsWithLimit = async (limit: number): Promise<Post[]> => {
  const response = await apiRequest(`${endpoints.postsWithLimit}${limit}`);
  return response.json();
};
export const fetchPostsByCategory = async (
  categoryId: number,
  limit: number
): Promise<Post[]> => {
  const response = await apiRequest(
    `${endpoints.posts}?categoryId=${categoryId}&_limit=${limit}&tags_like=2&tags_like=4'`
  );
  return response.json();
};
export const fetchPostsByQuery = async (
  queryString: string
): Promise<Post[]> => {
  const response = await apiRequest(`${endpoints.posts}?${queryString}`);
  return response.json();
};
export const fetchAuthorsPosts = async (id: number): Promise<Post[]> => {
  const response = await apiRequest(`${endpoints.postsByAuthor}${id}`);
  return response.json();
};

export const fetchPostsPaginate = async (
  limit: number,
  page: number
): Promise<{ posts: Post[]; total: number }> => {
  const response = await apiRequest(
    `${endpoints.posts}?_page=${page}&_limit=${limit}`
  );

  const total = parseInt(response.headers.get('X-Total-Count') || '0', 10);
  const posts = await response.json();

  return { posts, total };
};
