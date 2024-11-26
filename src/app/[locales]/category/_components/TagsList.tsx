import { useTags } from '@/utils/hooks/useTags';
import { useTranslations } from 'next-intl';

interface TagsListProps {
  selectedTags: number[];
  onChangeTags: (tags: number[]) => void;
}

export const TagsList = ({ selectedTags, onChangeTags }: TagsListProps) => {
  const t = useTranslations('category');
  const tags = useTags();

  const handleTagClick = (id: number) => {
    const currentTags = selectedTags.includes(id)
      ? selectedTags.filter((tag) => tag !== id)
      : [...selectedTags, id];
    onChangeTags(currentTags);
  };

  const renderTags = () => {
    return tags.map((tag) => {
      const { id, title } = tag;
      const isSelected = selectedTags.includes(id);

      return (
        <button
          key={id}
          onClick={() => handleTagClick(id)}
          className={`py-3 px-4 text-center text-sm text-grey font-semibold gap-6 border-gray-10 border-solid border-[1px] rounded-full transition duration-300 ease-in-out ${
            isSelected
              ? 'bg-yellow border-yellow'
              : 'hover:bg-yellow hover:border-yellow'
          }`}
        >
          {title}
        </button>
      );
    });
  };

  return (
    <div className="my-4">
      <h3 className="text-3xl font-bold mb-4">{t('tagsTitle')}</h3>
      <div className="flex flex-wrap gap-4">{renderTags()}</div>
    </div>
  );
};
