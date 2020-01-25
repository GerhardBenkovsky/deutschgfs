import React from "react";
import Lessons from "./lessons";

import "./lessonstyle.css";

import Error from "./Error";
import Banner from "./Banner";
import BannerBar from "./Banner-bar";
import { ContentConsumer } from "../Context/contentContext";

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
        <BannerBar scrollIntoView={this.handleClick} />
        <ContentConsumer>
          {context => (context.contentHasError ? <Error /> : <Lessons />)}
        </ContentConsumer>
      </div>
    );
  }
}

export default StartPage;
