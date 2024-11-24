'use client';
import { useEffect, useState } from 'react';
import arrowPrev from '@assets/icons/ArrowL.svg';
import arrowNext from '@assets/icons/ArrowR.svg';
import Image from 'next/image';
import { fetchAuthorById } from '@/api/authors';
import { AuthorInfo } from '@/app/[locales]/post/_components/AuthorInfo';

interface ReviewCarouselProps {
  reviews: Review[];
}

export const ReviewCarousel = ({ reviews }: ReviewCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [author, setAuthor] = useState<Author>();

  useEffect(() => {
    fetchAuthor();
  }, [currentIndex]);

  const fetchAuthor = async () => {
    const author = await fetchAuthorById(reviews[currentIndex].authorId);
    setAuthor(author);
  };

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <div className="w-[60%]">
      <p className="font-semibold text-2xl mb-16">
        {reviews[currentIndex].content}
      </p>

      <div className="flex items-center justify-between">
        {author && (
          <AuthorInfo
            authorName={author.name}
            authorId={author.id}
            from={author.from}
            avatar={author.avatar}
          />
        )}

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prevReview}
            className="flex items-center justify-center w-10 h-10 bg-light outline-none rounded-full hover:scale-110 transition-transform"
          >
            <Image src={arrowPrev} alt="Previous" className="w-6 h-6" />
          </button>
          <button
            onClick={nextReview}
            className="flex items-center justify-center w-10 h-10 bg-black outline-none rounded-full hover:scale-110 transition-transform"
          >
            <Image src={arrowNext} alt="Next" className="w-6 h-6 " />
          </button>
        </div>
      </div>
    </div>
  );
};
