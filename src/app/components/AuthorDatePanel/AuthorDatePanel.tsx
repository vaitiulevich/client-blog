import { fetchAuthorById } from '@/api/authors';
import { AuthorDate } from 'clients-blogs-ui-kit';

interface AuthorDatePanelProps {
  authorId: number;
  date: Date;
}

export const AuthorDatePanel = async ({
  authorId,
  date,
}: AuthorDatePanelProps) => {
  const { name } = await fetchAuthorById(authorId);

  return <AuthorDate author={name} date={date} />;
};
