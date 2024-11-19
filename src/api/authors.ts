import { endpoints } from '@/constants/endpoints';
import { apiRequest } from './apiRequest';

export const fetchAuthorById = async (id: number): Promise<Author> => {
  const url = `${endpoints.authors}/${id}`;
  return apiRequest<Author>(url);
};

export const fetchAuthorsWithLimit = async (
  limit: number
): Promise<Author[]> => {
  const url = `${endpoints.authorsWithLimit}${limit}`;
  return apiRequest<Author[]>(url);
};
