export interface CategoryHeaderProps {
  categoryId: number;
}

export interface CategoryListProps {
  selectCategory: number;
}

export interface SearchPanelProps {
  handleSearchChange: (tag: number) => void;
}

export interface TagsListProps {
  selectedTags: number[];
  onChangeTags: (tags: number[]) => void;
}
