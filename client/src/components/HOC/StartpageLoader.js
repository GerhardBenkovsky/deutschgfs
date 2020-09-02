import React from 'react';

import './Loader.css';

import { ContentConsumer } from '../Context/contentContext';

const StartpageLoader = (WrappedComponent) => {
  return () => (
    <ContentConsumer>
      {(content) =>
        content.length !== 0 ? (
          <WrappedComponent content={content} />
        ) : (
          <div
            className="Loader"
            style={{ margin: 'auto', placeSelf: 'center' }}
          ></div>
        )
      }
    </ContentConsumer>
  );
};

export default StartpageLoader;
