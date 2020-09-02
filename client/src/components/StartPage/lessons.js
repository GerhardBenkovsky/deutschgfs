import React from 'react';
import { Link } from 'react-router-dom';

import './lessonstyle.css';

import StartpageLoader from '../HOC/StartpageLoader';

function Lessons(props) {
  return props.content.content.map((item) => {
    const { id, title, description, logo } = item;
    return (
      <div key={id} className="lessonCard" id={title}>
        <div className="mp-overlay"></div>
        <div className="mp-overlay bottom"></div>
        <div className="text">
          <Link to={`/lernen/${id}`}>{title}</Link>
          <p>{description}</p>
        </div>
        <div className="imgcontent">
          <img src={logo} alt={logo} id={id} />
        </div>
      </div>
    );
  });
}

export default StartpageLoader(Lessons);
