type Article = {
  subtitle: string;
  articleP: string[];
};

type Post = {
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

type Author = {
  id: number;
  facebook: string;
  instagramm: string;
  linkedin: string;
  twitter: string;
  name: string;
  description: string;
  avatar: string;
  company: string;
};

type Locale = 'en' | 'ru';
