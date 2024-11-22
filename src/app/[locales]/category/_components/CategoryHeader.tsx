import { categoryes } from '@/constants/categoryes';

interface CategoryHeaderProps {
  categoryId: number;
}

export const CategoryHeader = ({ categoryId }: CategoryHeaderProps) => {
  const category = categoryes.find((item) => item.id === categoryId);
  if (!category) {
    return (
      <h2 className="text-3xl font-bold mb-4">
        Such category does m\not exist
      </h2>
    );
  }
  const { title, describtion } = category;
  return (
    <div className="bg-lavanderBG flex items-center flex-col py-16 mb-16">
      <h2 className="text-5xl font-bold">{title}</h2>
      <p className="text-grey text-sm my-4">{describtion}</p>
      <p className="uppercase font-semibold">{title}</p>
    </div>
  );
};
