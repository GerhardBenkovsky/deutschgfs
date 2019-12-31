import React, { Component } from "react";

import "./navbar.css";
import "./navbar-dropdown.css";

import NavbarItem from "./navbaritem";
import HamburgerMenu from "./HamburgerMenu";

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
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);

    window.innerWidth < "1000px"
      ? this.setState({ menu: "#hamburger" })
      : this.setState({ menu: "#desktop" });
  }

  handleScroll = event => {
    window.pageYOffset > this.state.prevPageOffset
      ? this.setState({ navbar: false, collapsed: true })
      : this.setState({ navbar: true });

    this.setState({ prevPageOffset: window.pageYOffset });
  };

  scrollToTop() {
    window.location.pathname === "/"
      ? window.scrollTo({ top: 0, behavior: "smooth" })
      : (window.location.pathname = "/");
  }

  handleAbout() {
    const footer = document.getElementById("footer-left");
    footer.scrollIntoView({ behavior: "smooth" });
  }

  handleCollapse() {
    this.setState(prevState => ({ collapsed: !prevState.collapsed }));
  }

  render() {
    return (
      <header
        className={this.state.navbar ? "App-header" : "App-header-hidden"}
      >
        <nav id="desktop">
          <div id="Logo">
            <p onClick={this.scrollToTop}>Deutschselbsthilfegruppe</p>
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
          <i className="fas fa-home" onClick={this.scrollToTop}></i>
          <i className="fas fa-bars" onClick={this.handleCollapse}></i>
          <ul style={this.state.collapsed ? { display: "none" } : {}}>
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
