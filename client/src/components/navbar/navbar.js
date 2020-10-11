import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import './navbar.css';
import './navbar-dropdown.css';

import NavbarItems from './navbaritems';

import logo from './Logo.svg';

export default function Navbar(props) {
  const [navbar, setNavbar] = useState(true);

  const [collapsed, setCollapse] = useState(true);

  const [prevPageOffset, setPageOffset] = useState(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const handleCollapse = () => {
    console.log("Collapsed")
    setCollapse(!collapsed);
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
      <nav style={navbar ? {} : { display: 'none' }}>
        <div id="Logo" onClick={scrollToTop}>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <ul id="desktop" >
          <NavbarItems
            items={props.Navbar}
            key={props.Navbar}
            scrollToTop={scrollToTop}
          />
        </ul>
      {
        //hamburger Nav
      }

        
        <div id="mobile-button" onClick={handleCollapse}>
          {" "}
        </div>
          

        <ul id="mobile"  style={collapsed ? { display: 'none' } : {}}
        onClick={handleCollapse}
        >
          <NavbarItems
            items={props.Navbar}
            key={props.Navbar}
            scrollToTop={scrollToTop}
            />
        </ul>
      </nav>
    </React.Fragment>
  );
}
