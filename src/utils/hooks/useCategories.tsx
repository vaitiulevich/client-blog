import business from '@assets/icons/business.svg';
import cyborg from '@assets/icons/cyborg.svg';
import economy from '@assets/icons/economy.svg';
import shuttle from '@assets/icons/shuttle.svg';
import { useTranslations } from 'next-intl';

export const useCategories = () => {
  const t = useTranslations('categories');

  return [
    {
      id: 1,
      title: t('business.title'),
      description: t('business.description'),
      icon: business,
    },
    {
      id: 2,
      title: t('startup.title'),
      description: t('startup.description'),
      icon: shuttle,
    },
    {
      id: 3,
      title: t('economy.title'),
      description: t('economy.description'),
      icon: economy,
    },
    {
      id: 4,
      title: t('technology.title'),
      description: t('technology.description'),
      icon: cyborg,
    },
  ];
};
