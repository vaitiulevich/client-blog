import { fetchAuthorById } from '@/api/authors';
// import { HrPanel } from '@/app/components/hrPanel/hrPanel';
// import { SocialLinks } from '@/app/components/socialLinks/socialLinks';
import { AuthorInfo } from '@app/[locales]/author/_components/AuthorInfo';
// import { useTranslations } from 'next-intl';

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const author = await fetchAuthorById(+id);
  console.log(id);

  // const t = useTranslations('author');
  return (
    <section className="font-sen text-dark">
      <div className="bg-lavanderBG wrapper-component">
        <AuthorInfo author={author} />
      </div>
    </section>
  );
}
