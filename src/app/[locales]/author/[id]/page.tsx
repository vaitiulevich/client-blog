'use client';
import { HrPanel } from '@/app/components/hrPanel/hrPanel';
import { SocialLinks } from '@/app/components/socialLinks/socialLinks';
import { useTranslations } from 'next-intl';

export default function AuthorPage() {
  const t = useTranslations('author');
  return (
    <section>
      <div className=" wrapper-component">
        <div>
          <div></div>
          <div>
            <h2>{t('title', { name: 'dd' })}</h2>
            <p></p>
            <SocialLinks />
          </div>
        </div>
        <HrPanel />
      </div>
      <p>Au</p>
    </section>
  );
}
