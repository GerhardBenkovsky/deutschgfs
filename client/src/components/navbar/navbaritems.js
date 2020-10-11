import React from 'react';
import { Link } from 'react-router-dom';

export default function NavbarItems(props) {
  return props.items.map((item) =>
    item.name === 'Home' ? (
      <li key={item.link}>
        <Link to={item.link}>
          <i className="fas fa-home" onClick={props.scrollToTop}></i>
        </Link>
      </li>
    ) : (
      <li key={item.name} className={item.name}>
        <Link to={item.link}>{item.name}</Link>
      </li>
    )
  );
}
