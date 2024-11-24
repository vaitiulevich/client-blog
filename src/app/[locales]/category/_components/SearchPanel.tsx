'use client';
import { ChangeEvent, useState } from 'react';
import { Button } from 'clients-blogs-ui-kit';
import { tags } from '@/constants/tags';

export const SearchPanel = ({
  handleSearchChange,
}: {
  handleSearchChange: (tag: number) => void;
}) => {
  const [searchText, setSearchText] = useState('');
  const [searchTag, setSearchTag] = useState<number | null>(null);
  const [filteredTags, setFilteredTags] = useState(tags);

  const handleSearch = () => {
    if (searchTag) {
      handleSearchChange(searchTag);
      setSearchTag(null);
      setSearchText('');
      setFilteredTags(tags);
    }
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchText(value);
    const matchedTag = tags.find((tag) => {
      return tag.title.toLowerCase() === value.toLowerCase();
    });

    setFilteredTags(
      tags.filter((tag) =>
        tag.title.toLowerCase().includes(value.toLowerCase())
      )
    );

    if (matchedTag) {
      setSearchTag(matchedTag.id);
    } else {
      setSearchTag(null);
    }
  };

  const handleSelectTag = (tagId: number) => {
    const selectedTag = tags.find((tag) => tag.id === tagId);
    if (selectedTag) {
      setSearchText(selectedTag.title);
      setSearchTag(selectedTag.id);
      handleSearchChange(selectedTag.id);
      setFilteredTags([]);
      setSearchTag(null);
      setSearchText('');
    }
  };

  return (
    <div className="min-h-[4rem] mb-2 relative">
      <div className="flex justify-between border-[1px]">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 outline-none"
          value={searchText}
          onChange={handleChangeInput}
        />
        <Button label={'Search'} onClick={handleSearch} />
      </div>
      {filteredTags.length > 0 && searchText && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 mt-1 max-h-60 overflow-y-auto">
          {filteredTags.map((tag) => (
            <li
              key={tag.id}
              className="p-2 cursor-pointer hover:bg-yellowOpasity"
              onClick={() => handleSelectTag(tag.id)}
            >
              {tag.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
