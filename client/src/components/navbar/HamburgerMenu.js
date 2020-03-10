import React from 'react';

export default function HamburgerMenu(props) {
  return props.items.map(item =>
    item.name === 'About' ? (
      <li key={item.name} className={item.name}>
        <p onClick={props.aboutClick}>{item.name}</p>
      </li>
    ) : item.name === 'Home' ? (
      <li key={item.name} className={item.name}>
        <p onClick={props.scrollToTop}>{item.name}</p>
      </li>
    ) : (
      <li key={item.name} className={item.name} id="hamburger-li">
        <a href={item.link}>{item.name}</a>
      </li>
    )
  );
}
