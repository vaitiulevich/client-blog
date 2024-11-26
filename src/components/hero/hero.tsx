import { PostInfoBlock } from '@components/postInfoBlock/postInfoBlock';

import { fetchAuthorById } from '@/api/authors';
import { fetchPostById } from '@/api/posts';

export const Hero = async () => {
  const post = await fetchPostById(1);
  const { banner, authorId } = post;
  const { name } = await fetchAuthorById(authorId);

  return (
    <div
      className="inset-0 wrapper-component bg-cover wrapper-component text-light bg-center font-sen bg-dark banner-shadow min-h-[35rem] flex items-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <PostInfoBlock post={post} authorName={name} authorId={authorId} />
    </div>
  );
};
