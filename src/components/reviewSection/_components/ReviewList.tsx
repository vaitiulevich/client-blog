import { ReviewCarousel } from './ReviewCarousel';

import { fetchReviews } from '@/api/rewiew';

export const ReviewList = async () => {
  const reviews = await fetchReviews();
  return <ReviewCarousel reviews={reviews} />;
};
