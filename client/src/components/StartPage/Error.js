import React from 'react';
import { ContentConsumer } from '../Context/contentContext';

function Error() {
  return (
    <ContentConsumer>
      {(context) =>
        context.contentErrorType === 'connectionProblem' ? (
          <div>
            <h1>
              Connection Problem{' '}
              <span role="img" aria-label="frownig face">
                ☹️
              </span>
            </h1>
          </div>
        ) : context.contentErrorType === 'serverDown' ? (
          <div>
            <h1>
              The server seems to be shut down at the moment{' '}
              <span role="img" aria-label="frownig face">
                ☹️
              </span>
            </h1>
          </div>
        ) : (
          <div>
            There seems to be a Problem{' '}
            <span role="img" aria-label="frownig face">
              ☹️
            </span>
          </div>
        )
      }
    </ContentConsumer>
  );
}

export default Error;
