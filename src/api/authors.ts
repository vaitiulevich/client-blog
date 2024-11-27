import { endpoints } from '@/constants/endpoints';
import { apiRequest } from './apiRequest';
import { Author } from './types/author';

export const fetchAuthorById = async (id: number): Promise<Author> => {
  const url = `${endpoints.authors}/${id}`;
  const response = await apiRequest(url);
  return response.json();
};
export const fetchAuthorsWithLimit = async (
  limit: number
): Promise<Author[]> => {
  const url = `${endpoints.authorsWithLimit}${limit}`;
  const response = await apiRequest(url);
  return response.json();
};
