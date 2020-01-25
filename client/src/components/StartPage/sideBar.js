import React, { Component } from "react";

import "./sidebarstyle.css";

import { ContentConsumer } from "../Context/contentContext";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      element: ""
    };
  }

  componentDidMount() {}

  handleClick(event) {
    event.persist();
    const element = document.getElementById(event.target.innerText);
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center"
    });
  }

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

export default SideBar;
