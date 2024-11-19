import { Link } from '@/i18n/routing';
import Image from 'next/image';

export const PostListItem = ({ post }: { post: Post }) => {
  const { title, banner, category, content } = post;
  const { subtitle } = content[0];
  return (
    <div className="flex items-center gap-6 mb-10">
      <div className="relative h-[17rem] w-[40%]">
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={banner}
          alt={title}
          layout="fill"
          priority
        />
      </div>
      <div className="w-[55%] flex flex-col gap-4">
        <p className="text-purpure uppercase">{category}</p>
        <Link href={`/post/${post.id}`}>
          <h3 className="text-2xl font-bold">{title}</h3>
        </Link>
        <p className="text-grey">{subtitle}</p>
      </div>
    </div>
  );
};
