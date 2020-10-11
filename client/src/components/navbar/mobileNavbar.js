import React from 'react';

import logo from './Logo.svg';
import NavbarItems from './navbaritems';
import { Link } from 'react-router-dom';

const MobileNavbar = (props) => {
  return (
    <nav id="hamburger" style={props.navbar ? {} : { display: 'none' }}>
      <div id="Logo">
        <Link to="/">
          <img src={logo} alt="Logo" onClick={props.scrollToTop} />
        </Link>
      </div>

      <i className="fas fa-bars" onClick={props.handleCollapse}></i>
      <ul style={props.collapsed ? { display: 'none' } : {}}>
        <NavbarItems
          items={props.Navbar}
          key={props.Navbar}
          aboutClick={props.handleAbout}
          scrollToTop={props.scrollToTop}
          menu={props.menu}
        />
      </ul>
    </nav>
  );
};

export default MobileNavbar;
