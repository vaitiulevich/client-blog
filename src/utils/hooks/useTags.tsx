import { useTranslations } from 'next-intl';
import { tags as rawTags } from '@/constants/tags';

export const useTags = () => {
  const t = useTranslations('tags');

  return rawTags.map((tag) => ({
    id: tag.id,
    title: t(tag.key),
  }));
};
