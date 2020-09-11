import React from 'react';

import './contentPageStyle.css';

import { ContentConsumer } from '../Context/contentContext';
import Lesson from './lesson';

export default function Content() {
  return (
    <ContentConsumer>
      {(context) => {
        const { content } = context;

        return content.map((item) => {
          return item.id === window.location.pathname.split('/')[2] ? (
            <Lesson key={item.id} data={item} />
          ) : null;
        });
      }}
    </ContentConsumer>
  );
}
