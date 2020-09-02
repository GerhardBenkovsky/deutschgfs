import React from 'react';
import { ContentConsumer } from '../Context/contentContext';
import Lessons from '../StartPage/lessons';

function Error() {
  return (
    <ContentConsumer>
      {(context) => {
        console.log(context);
        return context.contentErrorType === 'connectionProblem' ? (
          <div style={{ background: 'red' }}>
            <h1>
              Connection Problem{' '}
              <span role="img" aria-label="frownig face">
                ☹️
              </span>
            </h1>

            <Lessons />
          </div>
        ) : context.contentErrorType === 'serverDown' ? (
          <div>
            <h1>
              The server seems to be shut down at the moment
              <span role="img" aria-label="frownig face">
                ☹️
              </span>
            </h1>
          </div>
        ) : (
          <div>
            There seems to be a Problem
            <span role="img" aria-label="frownig face" style={{ zIndex: 100 }}>
              ☹️
            </span>
          </div>
        );
      }}
    </ContentConsumer>
  );
}

export default Error;
