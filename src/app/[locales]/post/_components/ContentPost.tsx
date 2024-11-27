import { Fragment } from 'react';

import { ContentPostProps } from '../Post.types';

export const ContentPost = ({ content }: ContentPostProps) => {
  return (
    <div className="doublewrap-component">
      {content.map(({ subtitle, articleP, id }) => (
        <Fragment key={id}>
          <h3 className="text-4xl font-bold mt-10 mb-6">{subtitle}</h3>
          {articleP.map(({ id, text }) => (
            <p className="text-grey" key={id}>
              {text}
            </p>
          ))}
        </Fragment>
      ))}
    </div>
  );
};
