import React from 'react';

import HamburgerMenu from './HamburgerMenu';

import logo from './Logo.svg';
import ChangeThemeSVG from './ChangeThemeSVG';

const MobileNavbar = props => {
  return (
    <nav id="hamburger" style={props.navbar ? {} : { display: 'none' }}>
      <div id="Logo" onClick={props.scrollToTop}>
        <img src={logo} alt="Logo" />
      </div>

      <i className="fas fa-bars" onClick={props.handleCollapse}></i>
      <ul style={props.collapsed ? { display: 'none' } : {}}>
        <HamburgerMenu
          items={props.Navbar}
          key={props.Navbar}
          aboutClick={props.handleAbout}
          scrollToTop={props.scrollToTop}
          menu={props.menu}
        />
        <div
          onClick={props.changeTheme}
          style={{
            height: '52px ',
            width: '52px',
            margin: 'auto'
          }}
        >
          <ChangeThemeSVG />
        </div>
      </ul>
    </nav>
  );
};

export default MobileNavbar;
