import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface AuthorInfoProps {
  authorName: string;
  date?: Date;
  from?: string;
  authorId: number;
  avatar: string;
  locale?: string;
}

export const AuthorInfo = ({
  authorName,
  authorId,
  avatar,
  date,
  from,
  locale = 'en',
}: AuthorInfoProps) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  const formattedDate = date ? date.toLocaleDateString(locale, options) : '';
  const t = useTranslations('post');
  return (
    <div className="flex gap-4">
      <div className="flex items-center justify-center w-12 h-12 overflow-hidden rounded-full">
        <div className="relative w-full h-full">
          <Image
            src={avatar}
            alt={authorName}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </div>
      </div>
      <div>
        <Link href={`/author/${authorId}`}>
          <h3 className="text-purpure text-xl font-bold">{authorName}</h3>
        </Link>
        <p className="text-grey text-sm">
          {date && (
            <>
              {t('postedTitle')}
              {formattedDate}
            </>
          )}
          {from && from}
        </p>
      </div>
    </div>
  );
};
