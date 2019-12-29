import React, { Component } from "react";

import "./lessonstyle.css";

import { ContentConsumer } from "../Context/contentContext";

class BannerBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="banner-bar">
        <ContentConsumer>
          {content => (
            <ul>
              {content.map((item, index) => (
                <li key={item.id + index}>
                  <p>{item.title}</p>
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
