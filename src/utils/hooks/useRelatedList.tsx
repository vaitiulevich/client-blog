import { useTranslations } from 'next-intl';

export const useRelatedList = () => {
  const t = useTranslations('related');

  return [
    { value: 'organization', label: t('organization.label') },
    { value: 'company', label: t('company.label') },
    { value: 'other', label: t('other.label') },
  ];
};
