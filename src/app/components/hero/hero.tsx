import { PostInfoBlock } from '../postInfoBlock/postInfoBlock';

export const Hero = async () => {
  const post = await fetchPost();
  const { banner, authorId } = post;
  const { name } = await fetchAuthorById(authorId);

  return (
    <div
      className="inset-0 wrapper-component bg-cover wrapper-component text-light bg-center font-sen bg-dark banner-shadow min-h-[35rem] flex items-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <PostInfoBlock post={post} authorName={name} />
    </div>
  );
};

async function fetchPost(): Promise<Post> {
  const res = await fetch('http://localhost:3001/posts/1');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
}

async function fetchAuthorById(id: number): Promise<Author> {
  const res = await fetch(`http://localhost:3001/authors/${id}`);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
}
