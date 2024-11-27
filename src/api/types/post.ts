export type Post = {
  id: number;
  authorId: number;
  title: string;
  category: string;
  tags: string[];
  banner: string;
  publishDate: Date;
  content: Article[];
  categoryId: number;
};
