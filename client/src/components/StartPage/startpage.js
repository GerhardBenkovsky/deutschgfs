import React from "react";
import Lessons from "./lessons";
import axios from "axios";

import "./lessonstyle.css";

export default class StartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://cdn.glitch.com/cfefdc52-4f33-4755-8ef1-756a1551887c%2Fdata-test.JSON?v=1577300605946`
      )
      .then(res => {
        this.setState({ content: res.data });
      });
    window.title = "Selbsthilegruppe Deutsch";
  }

  render() {
    const style = {
      display: "flex",
      flexDirection: "row"
    };
    return (
      <div className="content-wrapper">
        <Lessons data={this.state.content} style={style} />
      </div>
    );
  }
}
