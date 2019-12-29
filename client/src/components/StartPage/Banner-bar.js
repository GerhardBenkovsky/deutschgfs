import React, { Component } from "react";

import "./lessonstyle.css";

import { ContentConsumer } from "../Context/contentContext";

class BannerBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      element: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {}

  handleClick(event) {
    event.persist();
    let item = document.getElementById(event.currentTarget.id.toString());
    item.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    return (
      <div className="banner-bar">
        <ContentConsumer>
          {content => (
            <ul>
              {content.map((item, index) => (
                <li key={item.id + index}>
                  <p id={item.id} onClick={this.handleClick}>
                    {item.title}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </ContentConsumer>
      </div>
    );
  }
}

export default BannerBar;
