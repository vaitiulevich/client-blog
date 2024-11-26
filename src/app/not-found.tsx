import { ButtonNavigate } from '@components/buttonNavigate/buttonNavigate';
import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('notFound');
  return (
    <div className="h-[70vh] flex justify-center items-center flex-col gap-4">
      <h2 className="font-bold text-2xl">{t('title')}</h2>
      <ButtonNavigate path={'/'} text={t('returnButtonTitle')} />
    </div>
  );
}
