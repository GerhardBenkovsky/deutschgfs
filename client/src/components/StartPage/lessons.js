import React from 'react';
import { Link } from 'react-router-dom';

import './lessonstyle.css';

import Iframe from './iframe';

import StartpageLoader from '../HOC/StartpageLoader';

import { ContentConsumer } from '../Context/contentContext';

function Lessons(props) {
  return (
    <ContentConsumer>
      {(context) => {
        return context.content.map((item, index) => {
          const { id, title, description, logo } = item;
          return (
            <div key={id} className="lessonCard" id={title}>
              <div className="mp-overlay"></div>
              <div className="mp-overlay bottom"></div>
              {/* <div className="mp-text-overlay"></div> */}
              <div className="text">
                <Link to={'/lernen/' + id}>{title}</Link>
                <p>{description}</p>
              </div>

              <div className="imgcontent">
                <Iframe link={logo} id={id} />
              </div>
            </div>
          );
        });
      }}
    </ContentConsumer>
  );
}

export default StartpageLoader(Lessons);
