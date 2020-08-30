import React from 'react';
import { Link } from 'react-router-dom';

export default function NavbarItem(props) {
  return props.items.map((item) =>
    item.name === 'Home' ? (
      <li key={item.name} className={item.name}>
<<<<<<< HEAD
        <i className="fas fa-home" onClick={props.scrollToTop}></i>
=======
        <Link to={item.link}>
          <i className="fas fa-home" onClick={props.scrollToTop}></i>
        </Link>
>>>>>>> clientdev
      </li>
    ) : (
      <li key={item.name} className={item.name}>
        <Link to={item.link}>{item.name}</Link>
      </li>
    )
  );
}
