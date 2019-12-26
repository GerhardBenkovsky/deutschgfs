import React from "react";
import Lessons from "./lessons";

import "./lessonstyle.css";

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
        <Lessons content={this.props.content} style={style} />
      </div>
    );
  }
}

export default StartPage;
