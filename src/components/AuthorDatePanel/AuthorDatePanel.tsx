'use client';
import React, { useState, useEffect } from 'react';
import { AuthorDate } from 'clients-blogs-ui-kit';
import { useLocale, useTranslations } from 'next-intl';

import { fetchAuthorById } from '@/api/authors';
import { Link } from '@/i18n/routing';

interface AuthorDatePanelProps {
  authorId: number;
  date: Date;
  locale?: 'en' | 'ru';
}

export const AuthorDatePanel: React.FC<AuthorDatePanelProps> = ({
  authorId,
  date,
}) => {
  const [author, setAuthor] = useState<{ name: string; id: number } | null>(
    null
  );
  const t = useTranslations('authorDate');
  const selectLocal = useLocale();

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const fetchedAuthor = await fetchAuthorById(authorId);
        setAuthor(fetchedAuthor);
      } catch (error) {
        console.error('Error fetching author:', error);
      }
    };
    if (authorId) {
      fetchAuthor();
    }
  }, [authorId]);

  return (
    <AuthorDate
      date={date}
      locale={selectLocal as 'en' | 'ru'}
      contentAuthor={
        author ? (
          <Link locale={selectLocal} href={`/author/${author.id}`}>
            {author.name}
          </Link>
        ) : (
          <span>{t('noAuthorText')}</span>
        )
      }
    />
  );
};
