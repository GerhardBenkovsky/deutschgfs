import React from "react";
import Lessons from "./lessons";

import "./lessonstyle.css";

import Error from "./Error";
import { ContentConsumer } from "../Context/contentContext";
import SideBar from "./sideBar";
import Banner from "./Banner";

class StartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
      <div className="content-wrapper">
        <Banner />
        <SideBar scrollIntoView={this.handleClick} />
        <ContentConsumer>
          {context => (context.contentHasError ? <Error /> : <Lessons />)}
        </ContentConsumer>
      </div>
    );
  }
}

export default StartPage;
