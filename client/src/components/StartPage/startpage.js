import React from "react";
import Lessons from "./lessons";

import "./lessonstyle.css";

import Error from "./Error";
import Banner from "./Banner";
import BannerBar from "./Banner-bar";

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
        <Banner />
        <BannerBar />
        {this.props.hasError ? <Error /> : <Lessons style={style} />}
      </div>
    );
  }
}

export default StartPage;
