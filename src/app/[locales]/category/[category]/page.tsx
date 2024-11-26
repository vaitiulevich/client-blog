'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter, useParams } from 'next/navigation';
import { PostsList } from '@components/postsList/postsList';

import { CategoryHeader } from '../_components/CategoryHeader';
import { CategoryList } from '../_components/CategoryList';
import { TagsList } from '../_components/TagsList';
import { SearchPanel } from '../_components/SearchPanel';

import { fetchPostsByQuery } from '@/api/posts';

export default function CategoryPage() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();

  const category = params?.category || '';
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedTags, setSelectedTags] = useState<number[]>([]);

  useEffect(() => {
    const tags = searchParams.get('tags') || '';
    const selectedTags = tags
      ? tags.split(',').map((tag) => Number(tag.trim()))
      : [];
    setSelectedTags(selectedTags);
  }, [searchParams]);

  useEffect(() => {
    const fetchPosts = async () => {
      let postsQuery = `categoryId=${category}`;
      if (selectedTags.length) {
        postsQuery += `&tags_like=${selectedTags.join(',')}`;
      }
      const fetchedPosts = await fetchPostsByQuery(postsQuery);
      setPosts(fetchedPosts);
    };

    fetchPosts();
  }, [category, selectedTags]);

  const handleTagChange = (tags: number[]) => {
    setSelectedTags(tags);
    const newParams = new URLSearchParams();
    if (tags.length > 0) {
      newParams.set('tags', tags.join(','));
    }

    router.replace(`?${newParams.toString()}`, { scroll: false });
  };

  const handleSearchChange = (tag: number) => {
    const newParams = new URLSearchParams();
    newParams.set('tags', `${tag}`);

    router.replace(`?${newParams.toString()}`, { scroll: false });
  };

  return (
    <section className="text-dark mb-10">
      <CategoryHeader categoryId={+category} />
      <div className="wrapper-component flex justify-between max-md:flex-col-reverse">
        <div className="w-[67%] max-md:w-full">
          <PostsList posts={posts} />
        </div>
        <div className="w-[25%] max-md:w-full">
          <SearchPanel handleSearchChange={handleSearchChange} />
          <CategoryList selectCategory={+category} />
          <TagsList
            selectedTags={selectedTags}
            onChangeTags={handleTagChange}
          />
        </div>
      </div>
    </section>
  );
}
