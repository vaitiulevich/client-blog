import { ButtonNavigate } from '@components/buttonNavigate/buttonNavigate';
import { useTranslations } from 'next-intl';

import { BlogButtonProps } from '../Blog.types';

export const BlogButton = ({ id }: BlogButtonProps) => {
  const t = useTranslations('blog');
  return <ButtonNavigate path={`/post/${id}`} text={t('moreButtonTitle')} />;
};
