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
    axios.get(`/getdata/all`).then(res => {
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
