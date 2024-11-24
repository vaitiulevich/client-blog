import { CircleIcon } from 'clients-blogs-ui-kit';
import { SocialLinks } from '@app/components/socialLinks/socialLinks';
import { Link } from '@/i18n/routing';
import { fetchAuthorsWithLimit } from '@/api/authors';
import { Translation } from '@app/components/translation/Translation';

interface AuthorsListProps {
  limit: number;
}

export const AuthorsList = async ({ limit }: AuthorsListProps) => {
  const data = await fetchAuthorsWithLimit(limit);

  return (
    <div className="py-8 wrapper-component">
      <h2 className="text-3xl mb-8 text-center font-bold">
        <Translation section={'about'} name={'allAuthorsTitle'} />
      </h2>
      <div className="grid grid-cols-4 gap-4 max-md:grid-cols-2">
        {data.map((item) => (
          <div
            className="flex flex-col items-center justify-between gap-1 bg-gray-100 px-4 py-8 transition-transform duration-300 ease-in-out hover:bg-yellowOpasity hover:shadow-lg hover:scale-105"
            key={item.id}
          >
            <Link
              href={`/author/${item.id}`}
              className="flex flex-col items-center justify-start hover:cursor-pointer transition-transform duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <CircleIcon src={item.avatar} alt={item.name} />
              <h3 className="font-semibold whitespace-nowrap mt-4 text-xl max-md:text-lg max-md:whitespace-pre-wrap max-md:text-center">
                {item.name}
              </h3>
            </Link>

            <p className="m-0 text-xs mb-4 text-grey transition-colors duration-300 ease-in-out hover:text-yellow max-md:text-center  ">
              Content Writer @{item.company}
            </p>
            <SocialLinks />
          </div>
        ))}
      </div>
    </div>
  );
};
