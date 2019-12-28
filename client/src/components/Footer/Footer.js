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
          <ul>
            {this.props.links.map(item => (
              <li key={item.name}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </section>
        <section id="footer-right">Section 2³</section>
      </footer>
    );
  }
}

export default Footer;
