import { endpoints } from '@/constants/endpoints';
import { apiRequest } from './apiRequest';
import { Review } from './types/review';

export const fetchReviews = async (): Promise<Review[]> => {
  const url = endpoints.reviews;
  const response = await apiRequest(url);
  return response.json();
};
