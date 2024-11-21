import { fetchPostsPaginate } from '@/api/posts';
import { PostsList } from '@/app/components/postsList/postsList';
import { BlogHeader } from '@/app/[locales]/blog/_components/BlogHeader';
import { Pagination } from '@/app/components/pagination/pagination';
import { postsPerPage } from '@/constants/constants';
import { CategoryList } from '@/app/components/categoryList/categoryList';
import { JoinSection } from '@/app/components/joinSection/joinSection';

interface BlogPageProps {
  params: Promise<{ page: number }>;
}

export default async function Blog({ params }: BlogPageProps) {
  const currentPage = (await params).page;
  const { posts, total } = await fetchPostsPaginate(postsPerPage, currentPage);
  const totalPages = Math.ceil(total / postsPerPage);
  console.log('', totalPages);
  console.log('', postsPerPage);
  const isPaginate = totalPages > 1 && !!posts.length;

  return (
    <section className="text-dark">
      <BlogHeader />
      <div className="wrapper-component my-10">
        <h2 className="font-bold text-3xl pb-4 mb-8 border-b-2">All Posts</h2>
        <PostsList posts={posts} />
        {isPaginate && (
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        )}
        <h3 className="text-2xl font-bold mb-12 ">All Categories</h3>
        <CategoryList />
      </div>
      <JoinSection />
    </section>
  );
}
