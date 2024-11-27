import { useTranslations } from 'next-intl';

import { TranslationProps } from './Translation.types';

export const Translation = ({ section, name }: TranslationProps) => {
  const t = useTranslations(section);
  return <>{t(name)}</>;
};
