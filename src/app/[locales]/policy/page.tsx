import { useTranslations } from 'next-intl';

export default function PrivacyPolicy() {
  const t = useTranslations();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      PrivacyPolicy
      <h1>{t('welcome')} home</h1>
    </div>
  );
}
