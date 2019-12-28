import React, { Component } from "react";

import "./footer.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer>
        <section id="footer-left">
          This Page was build as part of a Scoolproject
        </section>
        <section id="footer-right">
          <ul>
            {this.props.links.map(item =>
              item.name === "About" ? (
                ""
              ) : item.name === "Home" ? (
                ""
              ) : (
                <li key={item.name}>
                  <a href={item.link}>{item.name}</a>
                </li>
              )
            )}
          </ul>
        </section>
      </footer>
    );
  }
}

export default Footer;
