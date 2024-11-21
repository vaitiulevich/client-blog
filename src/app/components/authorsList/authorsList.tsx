import { CircleIcon } from 'clients-blogs-ui-kit';
import { SocialLinks } from '../socialLinks/socialLinks';
import { Link } from '@/i18n/routing';
import { fetchAuthorsWithLimit } from '@/api/authors';

interface AuthorsListProps {
  limit: number;
}

export const AuthorsList = async ({ limit }: AuthorsListProps) => {
  const data = await fetchAuthorsWithLimit(limit);
  return (
    <div className="py-8  wrapper-component">
      <h2 className="text-3xl mb-8 text-center font-bold">List of Authors</h2>
      <div className="grid grid-cols-4 gap-4">
        {data.map((item) => (
          <div
            className="flex flex-col items-center justify-start gap-1 bg-gray-100 px-4 py-8 hover:bg-yellowOpasity transition duration-300 ease-in-out"
            key={item.id}
          >
            <Link
              href={`/author/${item.id}`}
              className="flex flex-col items-center justify-start hover:cursor-pointer"
            >
              <CircleIcon src={item.avatar} alt={item.name} />
              <h3 className="font-semibold whitespace-nowrap mt-4 text-xl">
                {item.name}
              </h3>
            </Link>

            <p className="m-0 text-xs mb-4 text-grey">
              Content Writer @{item.company}
            </p>
            <SocialLinks />
          </div>
        ))}
      </div>
    </div>
  );
};
