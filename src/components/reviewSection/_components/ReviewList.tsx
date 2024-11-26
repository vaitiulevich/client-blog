import { fetchReviews } from '@/api/rewiew';
import { ReviewCarousel } from './ReviewCarousel';

export const ReviewList = async () => {
  const reviews = await fetchReviews();
  return <ReviewCarousel reviews={reviews} />;
};
