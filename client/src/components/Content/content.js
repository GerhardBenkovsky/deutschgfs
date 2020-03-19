import React from 'react';

import './contentPageStyle.css';

import Error from '../StartPage/Error';
import { ContentConsumer } from '../Context/contentContext';
import LinkFrame from './link-frame';

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ContentConsumer>
        {context => {
          const { contentHasError, content } = context;

          return !contentHasError ? (
            content.map(item => {
              const { id, logo, title, description, links } = item;
              return id === window.location.pathname.split('/')[2] ? (
                <div key={id} className="lesson">
                  <div className="lesson-description">
                    <div className="Video-Wrapper">
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
                      marginBottom: '1em'
                    }}
                  ></hr>
                  <div className="Link-Wrapper">
                    {links.map(item => {
                      const { link, text } = item;
                      return <LinkFrame link={link} text={text} key={text} />;
                    })}
                  </div>
                </div>
              ) : null;
            })
          ) : (
            <Error />
          );
        }}
      </ContentConsumer>
    );
  }
}
