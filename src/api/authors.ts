import { apiRequest } from './apiRequest';

export async function fetchAuthorById(id: number): Promise<Author> {
  const url = `/authors/${id}`;
  return apiRequest<Author>(url);
}

export async function fetchAuthorsWithLimit(limit: number): Promise<Author[]> {
  const url = `/authors?_limit=${limit}`;
  return apiRequest<Author[]>(url);
}
