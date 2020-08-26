import React from 'react';
import Lessons from './lessons';

import './lessonstyle.css';

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
    <React.Fragment>
      <Banner />
      <SideBar scrollIntoView={handleClick} />
      <Lessons />
      <Duden />
    </React.Fragment>
  );
}
