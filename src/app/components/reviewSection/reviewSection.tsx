import { useTranslations } from 'next-intl';
import { ReviewList } from './_components/ReviewList';

export const ReviewSection = () => {
  const t = useTranslations('review');
  return (
    <section className="wrapper-component text-dark ">
      <div className="bg-yellowOpasity p-14 flex gap-4">
        <div className="border-r-2 pr-4 w-[40%]">
          <p className="uppercase">{t('upperHeadline')}</p>
          <h2 className="text-3xl font-bold my-4">{t('headline')}</h2>
          <p className="text-grey text-sm">{t('description')}</p>
        </div>
        <ReviewList />
      </div>
    </section>
  );
};