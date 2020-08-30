import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import './navbar.css';
import './navbar-dropdown.css';

import NavbarItem from './navbaritem';

import logo from './Logo.svg';
import ChangeTheme from './ChangeThemeSVG';
import MobileNavbar from './mobileNavbar';

export default function Navbar(props) {
  const [navbar, setNavbar] = useState(true);

  const [collapsed, setCollapse] = useState(true);

  const [prevPageOffset, setPageOffset] = useState(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // window.addEventListener('resize', handleResize);
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
    window.location.pathname === '/'
      ? window.scrollTo({ top: 0, behavior: 'smooth' })
      : (window.location.pathname = '/');
  };

  const handleAbout = () => {
    const footer = document.querySelector('footer');
    footer.scrollIntoView({ behavior: 'smooth' });
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
          {' '}
          <div onClick={props.changeTheme}>
            <ChangeTheme />
          </div>
          <NavbarItem
            items={props.Navbar}
            key={props.Navbar}
            aboutClick={handleAbout}
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
        handleAbout={handleAbout}
        changeTheme={props.changeTheme}
        navbar={navbar}
        collapsed={collapsed}
        handleCollapse={handleCollapse}
      />
    </React.Fragment>
  );
}
