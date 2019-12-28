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

  handleAbout() {
    const footer = document.getElementById("footer-left");
    footer.scrollIntoView(true);
  }

  render() {
    return (
      <header
        className={this.state.navbar ? "App-header" : "App-header-hidden"}
        style={this.props.style}
      >
        <nav>
          <div id="Logo">
            <a href="/">Deutschselbsthilfegruppe</a>
          </div>

          <ul>
            <NavbarItem
              items={this.props.Navbar}
              key={this.props.Navbar}
              aboutClick={this.handleAbout.bind(this)}
            />
          </ul>
        </nav>
      </header>
    );
  }
}
