import React from 'react';
import { Link } from 'react-router-dom';

export default function NavbarItem(props) {
  return props.items.map((item) =>
    item.name === 'Kontakt' ? (
      <li key={item.name} className={item.name}>
        <p onClick={props.aboutClick}>{item.name}</p>
      </li>
    ) : item.name === 'Home' ? (
      <li key={item.name} className={item.name}>
        <i className="fas fa-home" onClick={props.scrollToTop}></i>
      </li>
    ) : (
      <li key={item.name} className={item.name}>
        <Link to={'/' + item.link}>{item.name}</Link>
      </li>
    )
  );
}
