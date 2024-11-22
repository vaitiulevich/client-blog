import { categoryes } from '@/constants/categoryes';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

export const CategoryList = () => {
  const renderCategory = () => {
    return categoryes.map((category) => {
      const { id, title, describtion, icon } = category;
      return (
        <Link
          href={`/category/${id}`}
          key={id}
          className="p-6 border-gray-10 border-solid border-2 hover:bg-yellow transition duration-300 ease-in-out hover:border-yellow"
        >
          <div className="bg-yellowOpasity flex items-center justify-center w-12 h-12 rounded-md">
            <Image src={icon} alt={title} />
          </div>
          <h3 className="text-xl font-semibold my-3">{title}</h3>
          <p className="text-grey text-sm">{describtion}</p>
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
