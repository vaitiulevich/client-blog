export interface AuthorInfoProps {
  authorName: string;
  date?: Date;
  from?: string;
  authorId: number;
  avatar: string;
  locale?: string;
}

export interface ContentPostProps {
  content: Article[];
}

export interface PostProps {
  params: Promise<{ id: string; locales: string }>;
}
