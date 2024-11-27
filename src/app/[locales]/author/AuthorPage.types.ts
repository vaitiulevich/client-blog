import { Author } from '@/api/types/author';

export interface AuthorPageProps {
  params: Promise<{ id: string }>;
}
export interface TypingAnimationProps {
  text: string;
  speed?: number;
}
export interface AuthorHeaderProps {
  author: Author;
}
