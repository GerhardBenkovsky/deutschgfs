import React, { Component } from "react";

import "./navbar.css";

import NavbarItem from "./navbaritem";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Navbar: [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Help", link: "/help" },
        { name: "Contact", link: "/contact" }
      ],
      collapsed: true
    };
  }

  componentDidMount() {}

  render() {
    return (
      <header className="App-header">
        <nav>
          <div id="Logo">
            <a href="/">Logo</a>
          </div>

          <ul>
            <NavbarItem items={this.state.Navbar} key={this.state.Navbar} />
          </ul>
        </nav>
      </header>
    );
  }
}
