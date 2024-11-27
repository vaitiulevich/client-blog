import Image from 'next/image';
import { RecomendedPosts } from '@components/recomendedPosts/recomendedPosts';

import { AuthorInfo } from '../_components/AuthorInfo';
import { ContentPost } from '../_components/ContentPost';
import { PostProps } from '../Post.types';

import { fetchAuthorById } from '@/api/authors';
import { fetchPostById } from '@/api/posts';

export default async function Post({ params }: PostProps) {
  const { id, locales } = await params;
  const { title, category, authorId, publishDate, banner, content } =
    await fetchPostById(+id);
  const { name, avatar } = await fetchAuthorById(authorId);

  return (
    <section className="font-sen text-dark py-20">
      <div>
        <div className="doublewrap-component">
          <AuthorInfo
            authorId={authorId}
            authorName={name}
            avatar={avatar}
            date={new Date(publishDate)}
            locale={locales}
          />
          <div>
            <h3 className="text-5xl font-bold my-6">{title}</h3>
            <p className="font-semibold">{category}</p>
          </div>
        </div>
      </div>
      <div className="h-[25rem] w-[100%] flex items-center justify-center overflow-hidden my-10 relative">
        <Image
          src={banner}
          alt="banner"
          fill
          className="object-cover wrapper-component "
        />
      </div>
      <ContentPost content={content} />
      <RecomendedPosts excludedPostId={+id} />
    </section>
  );
}
