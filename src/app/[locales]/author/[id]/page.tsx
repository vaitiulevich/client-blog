import { fetchAuthorById } from '@/api/authors';
import { fetchAuthorsPosts } from '@/api/posts';
import { PostsList } from '@/app/components/postsList/postsList';
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
  const posts = await fetchAuthorsPosts(+id);
  // console.log(posts);

  // const t = useTranslations('author');
  return (
    <section className="font-sen text-dark">
      <div className="bg-lavanderBG doublewrap-component">
        <AuthorInfo author={author} />
      </div>
      <div className="doublewrap-component flex flex-col gap-10 my-10">
        <h3 className="text-3xl font-bold">My posts</h3>
        <PostsList posts={posts} />
      </div>
    </section>
  );
}
