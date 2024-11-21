import { fetchPostById } from '@/api/posts';
import { AuthorDatePanel } from '@/app/components/AuthorDatePanel/AuthorDatePanel';
import { ButtonNavigate } from '@/app/components/buttonNavigate/buttonNavigate';
import Image from 'next/image';

export const BlogHeader = async () => {
  const post = await fetchPostById(2);
  const { title, authorId, publishDate, content, id, banner } = post;
  const { subtitle } = content[0];
  return (
    <div className="wrapper-component bg-lavanderBG flex items-center justify-between h-[20rem]">
      <div className="flex flex-col gap-3 items-start w-[50%]">
        <p className="uppercase">Featured Post</p>
        <h2 className="text-3xl font-bold">{title}</h2>
        <AuthorDatePanel authorId={authorId} date={new Date(publishDate)} />
        <p className="text-grey text-sm">{subtitle}</p>
        <ButtonNavigate path={`/post/${id}`} text={'Read More'} />
      </div>
      <div className="relative h-[15rem] w-[35%]">
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={banner}
          alt={title}
          fill
          priority
        />
      </div>
    </div>
  );
};
