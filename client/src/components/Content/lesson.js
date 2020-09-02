import React from 'react';

import Cell from './cell';

import LinkFrame from './link-frame';

export default function Lesson(props) {
  const { logo, title, description, links } = props.data;

  const hrStyle = {
    width: '90%',
    height: '2px',
    background: 'red',
    marginTop: '1em',
    marginBottom: '1em',
    border: 0,
  };

  return (
    <React.Fragment key={Math.random().toString(36).substring(2)}>
      <div className="lesson-description">
        <div className="lp-img">
          <LinkFrame link={logo} />
        </div>
        <div className="lesson-description-text">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
      <hr style={hrStyle}></hr>
      <div className="Link-Wrapper">
        {links.map((item) => {
          const { link, text } = item;
          return <Cell link={link} text={text} key={text} />;
        })}
      </div>
    </React.Fragment>
  );
}
