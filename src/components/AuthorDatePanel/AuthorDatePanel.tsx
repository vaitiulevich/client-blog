import { fetchAuthorById } from '@/api/authors';
import { Link } from '@/i18n/routing';
import { AuthorDate } from 'clients-blogs-ui-kit';

interface AuthorDatePanelProps {
  authorId: number;
  date: Date;
  locale?: 'en' | 'ru';
}

export const AuthorDatePanel = async ({
  authorId,
  date,
  locale = 'en',
}: AuthorDatePanelProps) => {
  const { name, id } = await fetchAuthorById(authorId);

  return (
    <AuthorDate
      date={date}
      contentAuthor={
        <Link locale={locale} href={`/author/${id}`}>
          {name}
        </Link>
      }
    />
  );
};
