import { useTranslations } from 'next-intl';

export const Translation = ({
  section,
  name,
}: {
  section: string;
  name: string;
}) => {
  const t = useTranslations(section);
  return <>{t(name)}</>;
};
