import React from "react";
import Lessons from "./lessons";

import "./lessonstyle.css";

import Loader from "../HOC/Loader";

class StartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      load: false
    };
  }

  componentDidMount() {
    if (this.props.content.length !== 0) {
      this.setState({ load: true });
    }
  }

  render() {
    const style = {
      display: "flex",
      flexDirection: "row"
    };
    return this.state.load ? (
      <div className="content-wrapper">
        <Lessons content={this.props.content} style={style} />
      </div>
    ) : (
      <Loader />
    );
  }
}

export default StartPage;
