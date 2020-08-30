import React from 'react';

import './contentPageStyle.css';

import { ContentConsumer } from '../Context/contentContext';
import LinkFrame from './link-frame';

export default function Content() {
  return (
    <ContentConsumer>
      {(context) => {
        const { content } = context;

<<<<<<< HEAD
        return !contentHasError ? (
          content.map((item) => {
            const { id, logo, title, description, links } = item;
            return id === window.location.pathname.split('/')[2] ? (
              <React.Fragment>
                <div className="lesson-description">
                  <div className="lp-img">
                    <LinkFrame link={logo} />
                  </div>
                  <div className="lesson-description-text">
                    <h1>{title}</h1>
                    <p>{description}</p>
                  </div>
                </div>
                <hr
                  style={{
                    width: '90%',
                    height: '2px',
                    background: 'red',
                    marginTop: '1em',
                    marginBottom: '1em',
                    border: 0,
                  }}
                ></hr>
                <div className="Link-Wrapper">
                  {links.map((item) => {
                    const { link, text } = item;
                    return <LinkFrame link={link} text={text} key={text} />;
                  })}
                </div>
              </React.Fragment>
            ) : null;
          })
        ) : (
          <Error />
        );
=======
        return content.map((item) => {
          const { id, logo, title, description, links } = item;

          return id === window.location.pathname.split('/')[2] ? (
            <React.Fragment>
              <div className="lesson-description">
                <div className="lp-img">
                  <LinkFrame link={logo} />
                </div>
                <div className="lesson-description-text">
                  <h1>{title}</h1>
                  <p>{description}</p>
                </div>
              </div>
              <hr
                style={{
                  width: '90%',
                  height: '2px',
                  background: 'red',
                  marginTop: '1em',
                  marginBottom: '1em',
                  border: 0,
                }}
              ></hr>
              <div className="Link-Wrapper">
                {links.map((item) => {
                  const { link, text } = item;
                  return <LinkFrame link={link} text={text} key={text} />;
                })}
              </div>
            </React.Fragment>
          ) : null;
        });
>>>>>>> clientdev
      }}
    </ContentConsumer>
  );
}
