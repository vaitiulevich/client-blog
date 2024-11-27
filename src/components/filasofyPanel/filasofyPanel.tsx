import { useTranslations } from 'next-intl';

import { FilasofyPanelProps } from './FilasofyPanel.types';

import { Link } from '@/i18n/routing';

export const FilasofyPanel = ({
  filasofyKeys,
  translationPath,
  firstLink,
}: FilasofyPanelProps) => {
  const t = useTranslations(translationPath);

  const renderFilasofy = () => {
    return filasofyKeys.map((key, ind) => (
      <div key={key}>
        <p className="w-[45%] uppercase font-semibold">
          {t(`${key}.upperTitle`)}
        </p>
        <h3 className="font-bold text-xl py-4 max-md:py-2">
          {t(`${key}.title`)}
        </h3>
        <p className="text-grey text-sm">{t(`${key}.content`)}</p>
        {firstLink && ind === 0 && (
          <Link
            className="text-purpure text-sm font-bold"
            href={firstLink.href}
          >
            {firstLink.text}
          </Link>
        )}
      </div>
    ));
  };

  return (
    <div className="bg-lavanderBG p-16 grid grid-cols-2 gap-[10%] items-start min-h-72 max-md:grid-cols-1 max-md:p-6 max-md:gap-4">
      {renderFilasofy()}
    </div>
  );
};
