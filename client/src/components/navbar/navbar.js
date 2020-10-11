import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import './navbar.css';
import './navbar-dropdown.css';

import NavbarItems from './navbaritems';

import logo from './Logo.svg';
import MobileNavbar from './mobileNavbar';

export default function Navbar(props) {
  const [navbar, setNavbar] = useState(true);

  const [collapsed, setCollapse] = useState(true);

  const [prevPageOffset, setPageOffset] = useState(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const handleCollapse = () => {
    setCollapse(() => !collapsed);
  };

  const handleScroll = (event) => {
    if (window.pageYOffset < prevPageOffset) {
      setNavbar(() => true);
    } else {
      setNavbar(() => false);
      setCollapse(() => true);
    }
    setPageOffset(() => window.pageYOffset);
  };

  const scrollToTop = () => {
    if (window.location.pathname === '/')
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <React.Fragment>
      <nav id="desktop" style={navbar ? {} : { display: 'none' }}>
        <div id="Logo" onClick={scrollToTop}>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <ul>
          <NavbarItems
            items={props.Navbar}
            key={props.Navbar}
            scrollToTop={scrollToTop}
          />
        </ul>
      </nav>
      {
        //hamburger Nav
      }
      <MobileNavbar
        scrollToTop={scrollToTop}
        Navbar={props.Navbar}
        navbar={navbar}
        collapsed={collapsed}
        handleCollapse={handleCollapse}
      />
    </React.Fragment>
  );
}
