import { useTranslations } from 'next-intl';

// interface Article {
//   articleTitle: string;
//   articleP: string[];
// }

export default function PrivacyPolicy() {
  const t = useTranslations('policy');
  // const articles: Article[] = t('articles') as unknown as Article[];

  return (
    <section className="font-sen">
      <div className="bg-lavanderBG flex flex-col items-center min-h-[10rem] justify-center">
        <h2 className="text-dark text-4xl font-bold">{t('headline')}</h2>
        <p className="text-grey mt-2 text-sm font-thin">{t('subStatus')}</p>
      </div>
      <div className="py-5 px-[25%]">
        <h3 className="text-dark text-4xl font-bold mt-20">
          {t('articleTitle')}
        </h3>
        <p className="font-inter mt-5 text-grey text-sm">{t('articleP')}</p>
        {/* {articles.map((article, index) => (
          <div key={index} className="article">
            <h2>{article.articleTitle}</h2>
            {article.articleP.map((paragraph, ind) => (
              <p key={ind}>{paragraph}</p>
            ))}
          </div>
        ))} */}
      </div>
    </section>
  );
}
