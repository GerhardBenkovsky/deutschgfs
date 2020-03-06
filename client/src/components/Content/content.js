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
        {context =>
          !context.contentHasError ? (
            context.content.map(item =>
              item.id === window.location.pathname.split('/')[2] ? (
                <div key={item.id} className="lesson">
                  <div className="lesson-description">
                    <div className="Video-Wrapper">
                      <LinkFrame link={item.logo} />
                    </div>
                    <div className="lesson-description-text">
                      <h1>{item.title}</h1>
                      <p>{item.description}</p>
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
                    {item.links.map(link => (
                      <LinkFrame
                        link={link.link}
                        text={link.text}
                        key={link.text}
                      />
                    ))}{' '}
                  </div>
                </div>
              ) : null
            )
          ) : (
            <Error />
          )
        }
      </ContentConsumer>
    );
  }
}
