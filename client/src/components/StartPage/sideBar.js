import React from 'react';

import { ContentConsumer } from '../Context/contentContext';

export default function SideBar(props) {
  return (
    <div className="banner-bar">
      <ContentConsumer>
        {(context) => (
          <ul>
            {context.content.map((item, index) => (
              <li key={item.id + index} onClick={props.scrollIntoView}>
                <p>{item.title}</p>
              </li>
            ))}
            <li key="duden">
              <p onClick={props.scrollIntoView}>Wörterbuch</p>
            </li>
          </ul>
        )}
      </ContentConsumer>
    </div>
  );
}
