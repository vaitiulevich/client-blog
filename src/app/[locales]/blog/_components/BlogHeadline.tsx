import { useTranslations } from 'next-intl';

export const BlogHeadline = () => {
  const t = useTranslations('blog');

  return <p className="uppercase">{t('headline')}</p>;
};
