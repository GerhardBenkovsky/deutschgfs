import React, { Component } from "react";

import "./lessonstyle.css";

import { ContentConsumer } from "../Context/contentContext";

class BannerBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      element: ""
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="banner-bar">
        <ContentConsumer>
          {context => (
            <ul>
              {context.content.map((item, index) => (
                <li key={item.id + index}>
                  <p onClick={this.props.scrollIntoView}>{item.title}</p>
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
