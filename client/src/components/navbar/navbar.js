import React, { Component } from "react";

import "./navbar.css";

import NavbarItem from "./navbaritem";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      navbar: true,
      prevPageOffset: window.pageYOffset
    };

    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {
    window.pageYOffset > this.state.prevPageOffset
      ? this.setState({ navbar: false })
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

  render() {
    return (
      <header
        className={this.state.navbar ? "App-header" : "App-header-hidden"}
        style={this.props.style}
      >
        <nav>
          <div id="Logo">
            <p onClick={this.scrollToTop}>Deutschselbsthilfegruppe</p>
          </div>

          <ul>
            <NavbarItem
              items={this.props.Navbar}
              key={this.props.Navbar}
              aboutClick={this.handleAbout.bind(this)}
              scrollToTop={this.scrollToTop}
            />
          </ul>
        </nav>
      </header>
    );
  }
}
