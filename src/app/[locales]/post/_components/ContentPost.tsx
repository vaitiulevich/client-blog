import { Fragment } from 'react';

interface ContentPostProps {
  content: Article[];
}
export const ContentPost = ({ content }: ContentPostProps) => {
  return (
    <div className="doublewrap-component">
      {content.map((item, ind) => (
        <Fragment key={ind}>
          <h3 className="text-4xl font-bold mt-10 mb-6">{item.subtitle}</h3>
          {item.articleP.map((p, ind) => (
            <p className="text-grey" key={ind}>
              {p}
            </p>
          ))}
        </Fragment>
      ))}
    </div>
  );
};
