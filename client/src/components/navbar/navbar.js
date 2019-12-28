import React, { Component } from "react";

import "./navbar.css";

import NavbarItem from "./navbaritem";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      navbar: true
    };
  }

  handleScroll(event) {}

  handleAbout() {
    const footer = document.getElementById("footer-left");
    footer.scrollIntoView(true);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }

  render() {
    return (
      <header className="App-header">
        <nav>
          <div id="Logo">
            <a href="/">Logo</a>
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
