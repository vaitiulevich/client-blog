import { apiRequest } from './apiRequest';

export async function fetchPosts(): Promise<Post[]> {
  return apiRequest<Post[]>('/posts');
}

export async function fetchPostById(id: number): Promise<Post> {
  return apiRequest<Post>(`/posts/${id}`);
}

export async function fetchPostsWithLimit(limit: number): Promise<Post[]> {
  return apiRequest<Post[]>(`/posts?_limit=${limit}`);
}
