import { fetchPostById } from '@/api/posts';
import { AuthorDatePanel } from '@/app/components/AuthorDatePanel/AuthorDatePanel';
import Image from 'next/image';
import { BlogHeadline } from './BlogHeadline';
import { BlogButton } from './BlogButton';

export const BlogHeader = async () => {
  const post = await fetchPostById(2);
  const { title, authorId, publishDate, content, id, banner } = post;
  const { subtitle } = content[0];
  return (
    <div className="wrapper-component bg-lavanderBG flex items-center justify-between h-[20rem] max-md:h-fit max-md:p-4 max-sm:flex-col-reverse">
      <div className="flex flex-col gap-3 items-start w-[50%] max-sm:w-full">
        <BlogHeadline />
        <h2 className="text-3xl font-bold max-md:text-xl">{title}</h2>
        <AuthorDatePanel authorId={authorId} date={new Date(publishDate)} />
        <p className="text-grey text-sm">{subtitle}</p>
        <BlogButton id={id} />
      </div>
      <div className="relative h-[15rem] w-[35%] max-sm:w-full  max-sm:h-28">
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
