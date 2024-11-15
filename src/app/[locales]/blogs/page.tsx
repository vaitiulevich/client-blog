interface Post {
  id: number;
  title: string;
}
async function fetchPosts(): Promise<Post[]> {
  const res = await fetch('http://localhost:3001/posts');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
}

export default async function PrivacyPolicy() {
  const posts = await fetchPosts();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Privacy Policy</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
