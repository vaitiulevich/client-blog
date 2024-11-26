import { ButtonNavigate } from '@components/buttonNavigate/buttonNavigate';
import { useTranslations } from 'next-intl';

export const BlogButton = ({ id }: { id: number }) => {
  const t = useTranslations('blog');
  return <ButtonNavigate path={`/post/${id}`} text={t('moreButtonTitle')} />;
};
