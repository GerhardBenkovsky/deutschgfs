import React from 'react';
import Lessons from './lessons';

import './lessonstyle.css';

import Error from './Error';
import { ContentConsumer } from '../Context/contentContext';
import SideBar from './sideBar';
import Banner from './Banner';
import Duden from './Duden';

export default function StartPage() {
  let handleClick = (event) => {
    event.persist();
    const element = document.getElementById(event.target.innerText);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  };

  return (
    <div className="content-wrapper">
      <Banner />
      <SideBar scrollIntoView={handleClick} />
      <ContentConsumer>
        {(context) => (context.contentHasError ? <Error /> : <Lessons />)}
      </ContentConsumer>
      <Duden />
    </div>
  );
}
