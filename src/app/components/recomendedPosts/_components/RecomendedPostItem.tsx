import Image from 'next/image';
import { AuthorDatePanel } from '../../AuthorDatePanel/AuthorDatePanel';

interface RecomendedPostItemProps {
  post: Post;
}
export const RecomendedPostItem = ({ post }: RecomendedPostItemProps) => {
  const { title, authorId, publishDate, content, banner } = post;
  const { subtitle } = content[0];
  return (
    <div>
      <div className="w-[100%] h-[13rem] flex items-center justify-center overflow-hidden my-4">
        <Image
          src={banner}
          alt="banner"
          layout="responsive"
          width={50}
          height={50}
          className="object-cover w-full h-full"
        />
      </div>
      <AuthorDatePanel authorId={authorId} date={new Date(publishDate)} />
      <h3 className="font-bold text-xl my-4">{title}</h3>
      <p className="text-grey text-sm">{subtitle}</p>
    </div>
  );
};
