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
  const [isExist, setIsExist] = useState(true);

  const handleSearch = () => {
    if (isExist && searchTag) {
      handleSearchChange(searchTag);
      setSearchTag(null);
      setSearchText('');
    }
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchText(value);
    const matchedTag = tags.find((tag) => {
      return tag.title.toLowerCase() === value.toLowerCase();
    });
    const isEmtyInput = value.trim() === '';
    setIsExist(isEmtyInput ? true : !!matchedTag);
    if (matchedTag) {
      setSearchTag(matchedTag.id);
    }
  };

  return (
    <div className="min-h-[4rem] mb-2">
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
      {!isExist && <p className="text-sm text-purpure">No such tag exists</p>}
    </div>
  );
};
