import { Link } from '@/i18n/routing';
import { useCategories } from '@/utils/hooks/useCategories';
import Image from 'next/image';

export const CategoryList = () => {
  const categories = useCategories();
  const renderCategory = () => {
    return categories.map((category) => {
      const { id, title, description, icon } = category;
      return (
        <Link
          href={`/category/${id}`}
          key={id}
          className="p-6 border-2 border-gray-10 relative transform transition-transform duration-300 ease-in-out hover:scale-105 hover:border-yellow hover:bg-yellow group max-md:p-2"
        >
          <div className="bg-yellowOpasity flex items-center justify-center w-12 h-12 rounded-md transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-8px]">
            <Image
              src={icon}
              alt={title}
              className="transition-transform duration-300 ease-in-out"
            />
          </div>
          <h3 className="text-xl font-semibold my-3">{title}</h3>
          <p className="text-grey text-sm">{description}</p>
        </Link>
      );
    });
  };

  return (
    <div className="grid grid-cols-4 gap-4 max-md:grid-cols-2">
      {renderCategory()}
    </div>
  );
};
