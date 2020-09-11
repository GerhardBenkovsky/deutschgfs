import React from 'react';

export default function Cell(props) {
  return (
    <div>
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="link"
      >
        {props.text}
      </a>
    </div>
  );
}
