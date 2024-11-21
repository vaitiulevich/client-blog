import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface AuthorInfoProps {
  authorName: string;
  date: Date;
  avatar: string;
  locale?: string;
}

export const AuthorInfo = ({
  authorName,
  avatar,
  date,
  locale = 'en',
}: AuthorInfoProps) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  const formattedDate = date.toLocaleDateString(locale, options);
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
        <h3 className="text-purpure text-xl font-bold">{authorName}</h3>
        <p className="text-grey text-sm">
          {t('postedTitle')}
          {formattedDate}
        </p>
      </div>
    </div>
  );
};
