import React, { useState, useEffect } from 'react';

import './navbar.css';
import './navbar-dropdown.css';

import NavbarItem from './navbaritem';

import logo from './Logo.svg';
import ChangeThemeSVG from './ChangeThemeSVG';
import MobileNavbar from './mobileNavbar';

export default function Navbar(props) {
  const [navbar, setNavbar] = useState(true);

  const [collapsed, setCollapse] = useState(true);

  const [prevPageOffset, setPageOffset] = useState(window.pageYOffset);

  const [menu, setMenu] = useState('desktop');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
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

  const handleResize = () => {
    window.innerWidth < '1000px'
      ? setMenu(() => '#hamburger')
      : setMenu(() => '#desktop');
  };

  const scrollToTop = () => {
    window.location.pathname === '/'
      ? window.scrollTo({ top: 0, behavior: 'smooth' })
      : (window.location.pathname = '/');
  };

  const handleAbout = () => {
    const footer = document.getElementById('footer-left');
    footer.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <React.Fragment>
      <nav id="desktop" style={navbar ? {} : { display: 'none' }}>
        <div id="Logo" onClick={scrollToTop}>
          <img src={logo} alt="Logo" />
        </div>

        <ul>
          {' '}
          <div
            onClick={props.changeTheme}
            style={{
              height: '52px',
              width: '52px',
            }}
          >
            <ChangeThemeSVG />
          </div>
          <NavbarItem
            items={props.Navbar}
            key={props.Navbar}
            aboutClick={handleAbout}
            scrollToTop={scrollToTop}
            menu={menu}
          />{' '}
        </ul>
      </nav>
      {
        //hamburger Nav
      }
      <MobileNavbar
        scrollToTop={scrollToTop}
        Navbar={props.Navbar}
        handleAbout={handleAbout}
        menu={menu}
        changeTheme={props.changeTheme}
        navbar={navbar}
        collapsed={collapsed}
        handleCollapse={handleCollapse}
      />
    </React.Fragment>
  );
}
