import React from "react";
import Lessons from "./lessons";

import "./lessonstyle.css";

import StartpageLoader from "../HOC/StartpageLoader";

class StartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const style = {
      display: "flex",
      flexDirection: "row"
    };
    return (
      <div className="content-wrapper">
        <div className="banner">
          <div className="banner-content"></div>
          <div className="banner-bar"></div>
        </div>
        <Lessons content={this.props.content} style={style} />
      </div>
    );
  }
}

export default StartpageLoader(StartPage);
