import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/routing';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  const t = useTranslations('pagination');
  const nextPage = +currentPage + 1;
  const prevPage = +currentPage - 1;

  return (
    <div className="flex justify-center items-center gap-4 m-8 font-semibold text-lg">
      <Link
        href={`/blog/page/${prevPage}`}
        className={`${
          prevPage < 1 ? 'opacity-50 pointer-events-none' : ''
        } text-dark`}
      >
        {t('prev')}
      </Link>
      <Link
        href={`/blog/page/${nextPage}`}
        className={`${
          nextPage > totalPages ? 'opacity-50 pointer-events-none' : ''
        } text-dark`}
      >
        {t('next')}
      </Link>
    </div>
  );
};
