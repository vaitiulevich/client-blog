import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { Link } from '@/i18n/routing';
import { useCategories } from '@/utils/hooks/useCategories';
interface CategoryListProps {
  selectCategory: number;
}
export const CategoryList = ({ selectCategory }: CategoryListProps) => {
  const t = useTranslations('category');
  const categories = useCategories();

  const renderCategory = () => {
    return categories.map((category) => {
      const { id, title, icon } = category;
      const isSelected = id === selectCategory;
      return (
        <Link
          href={`/category/${id}`}
          key={id}
          className={`p-2 flex items-center gap-6 border-gray-10 border-solid border-2 transition duration-300 ease-in-out  ${isSelected ? 'bg-yellow border-yellow' : 'hover:bg-yellow hover:border-yellow'}`}
        >
          <div className="bg-yellowOpasity flex items-center justify-center w-12 h-12 rounded-md">
            <Image src={icon} alt={title} />
          </div>
          <h3 className="text-xl font-semibold my-3 max-md:hidden">{title}</h3>
        </Link>
      );
    });
  };
  return (
    <div>
      <h3 className="text-3xl font-bold mb-4">{t('categoryTitle')}</h3>
      <div className="flex gap-4 md:flex-col max-md:gap-2 max-md:justify-between">
        {renderCategory()}
      </div>
    </div>
  );
};
