import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { AuthorDatePanel } from '@/components/AuthorDatePanel/AuthorDatePanel';

interface RecomendedPostItemProps {
  post: Post;
}
export const RecomendedPostItem = ({ post }: RecomendedPostItemProps) => {
  const { title, authorId, publishDate, content, banner, id } = post;
  const { subtitle } = content[0];
  return (
    <div>
      <div className="w-full h-[13rem] flex items-center justify-center overflow-hidden my-4 relative">
        <Image
          src={banner}
          alt="banner"
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
      </div>
      <AuthorDatePanel authorId={authorId} date={new Date(publishDate)} />
      <Link href={`/post/${id}`} className="font-bold text-xl my-4">
        {title}
      </Link>
      <p className="text-grey text-sm">{subtitle}</p>
    </div>
  );
};
