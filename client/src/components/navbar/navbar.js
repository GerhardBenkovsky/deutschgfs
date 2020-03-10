import React, { Component } from 'react';

import './navbar.css';
import './navbar-dropdown.css';

import NavbarItem from './navbaritem';
import HamburgerMenu from './HamburgerMenu';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      navbar: true,
      dropdown: false,
      prevPageOffset: window.pageYOffset
    };

    this.scrollToTop = this.scrollToTop.bind(this);
    this.handleCollapse = this.handleCollapse.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);

    window.innerWidth < '1000px'
      ? this.setState({ menu: '#hamburger' })
      : this.setState({ menu: '#desktop' });
  }

  handleScroll = event => {
    window.pageYOffset > this.state.prevPageOffset
      ? this.setState({ navbar: false, collapsed: true })
      : this.setState({ navbar: true });

    this.setState({ prevPageOffset: window.pageYOffset });
  };

  scrollToTop() {
    window.location.pathname === '/'
      ? window.scrollTo({ top: 0, behavior: 'smooth' })
      : (window.location.pathname = '/');
  }

  handleAbout() {
    const footer = document.getElementById('footer-left');
    footer.scrollIntoView({ behavior: 'smooth' });
  }

  handleCollapse() {
    this.setState(prevState => ({ collapsed: !prevState.collapsed }));
  }

  render() {
    return (
      <header
        className={this.state.navbar ? 'App-header' : 'App-header-hidden'}
      >
        <nav id="desktop">
          <div id="Logo" onClick={this.scrollToTop}>
            <svg
              viewBox="0 0 65 60"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              style={{ height: '100%' }}
            >
              <g viewBox="0 0 200 60" preserveAspectRatio="xMidYMid meet">
                <g>
                  <path
                    fill="var(--site-logo-back)"
                    d="M63,14.87c-0.72-2.7-2.85-4.83-5.56-5.56C52.54,8,32.88,8,32.88,8S13.23,8,8.32,9.31
            c-2.7,0.72-4.83,2.85-5.56,5.56C1.45,19.77,1.45,30,1.45,30s0,10.23,1.31,15.13c0.72,2.7,2.85,4.83,5.56,5.56
            C13.23,52,32.88,52,32.88,52s19.66,0,24.56-1.31c2.7-0.72,4.83-2.85,5.56-5.56C64.31,40.23,64.31,30,64.31,30
            S64.31,19.77,63,14.87z"
                  ></path>
                  <text
                    fill="var(--site-logo-text)"
                    x="15.5"
                    y="40"
                    style={{ fontWeight: 'bold', fontSize: '200%' }}
                  >
                    DE
                  </text>
                  <g></g>
                </g>
              </g>
            </svg>
          </div>

          <ul>
            <NavbarItem
              items={this.props.Navbar}
              key={this.props.Navbar}
              aboutClick={this.handleAbout.bind(this)}
              scrollToTop={this.scrollToTop}
              menu={this.state.menu}
            />
          </ul>
        </nav>
        {
          //Navs
        }
        <nav id="hamburger">
          <div id="Logo">
            <svg
              viewBox="0 0 65 60"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              style={{ height: '100%' }}
            >
              <g viewBox="0 0 200 60" preserveAspectRatio="xMidYMid meet">
                <g>
                  <path
                    fill="var(--site-logo-back)"
                    d="M63,14.87c-0.72-2.7-2.85-4.83-5.56-5.56C52.54,8,32.88,8,32.88,8S13.23,8,8.32,9.31
            c-2.7,0.72-4.83,2.85-5.56,5.56C1.45,19.77,1.45,30,1.45,30s0,10.23,1.31,15.13c0.72,2.7,2.85,4.83,5.56,5.56
            C13.23,52,32.88,52,32.88,52s19.66,0,24.56-1.31c2.7-0.72,4.83-2.85,5.56-5.56C64.31,40.23,64.31,30,64.31,30
            S64.31,19.77,63,14.87z"
                  ></path>
                  <text
                    fill="var(--site-logo-text)"
                    x="15.5"
                    y="40"
                    style={{ fontWeight: 'bold', fontSize: '200%' }}
                  >
                    DE
                  </text>
                </g>
              </g>
            </svg>
          </div>

          <i className="fas fa-bars" onClick={this.handleCollapse}></i>
          <ul style={this.state.collapsed ? { display: 'none' } : {}}>
            <HamburgerMenu
              items={this.props.Navbar}
              key={this.props.Navbar}
              aboutClick={this.handleAbout.bind(this)}
              scrollToTop={this.scrollToTop}
              menu={this.state.menu}
            />
          </ul>
        </nav>
      </header>
    );
  }
}
