import { useTranslations } from 'next-intl';

interface FilasofyPanelProps {
  filasofyKeys: string[];
  translationPath: string;
}

export const FilasofyPanel = ({
  filasofyKeys,
  translationPath,
}: FilasofyPanelProps) => {
  const t = useTranslations(translationPath);

  const renderFilasofy = () => {
    return filasofyKeys.map((key) => (
      <div key={key}>
        <p className="w-[45%] uppercase font-semibold">
          {t(`${key}.upperTitle`)}
        </p>
        <h3 className="font-bold text-xl py-4">{t(`${key}.title`)}</h3>
        <p className="text-grey text-sm">{t(`${key}.content`)}</p>
      </div>
    ));
  };

  return (
    <div className="bg-lavanderBG px-16 grid grid-cols-2 gap-[10%] items-center min-h-72">
      {renderFilasofy()}
    </div>
  );
};
