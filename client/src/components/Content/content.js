import React from "react";

import "./contentPageStyle.css";

import Iframe from "../StartPage/iframe";
import Loader from "../HOC/videoLoader";

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [],
      load: false
    };
  }

  componentDidMount() {
    for (let i = 0; i < this.props.content.length; i++) {
      if (this.props.content[i].id === window.location.pathname.split("/")[2]) {
        this.setState({ content: this.props.content[i] });
        this.setState({ load: true });
      }
    }
  }

  render() {
    return this.state.load ? (
      <div key={this.state.content.id} className="lesson">
        <h1>{this.state.content.title}</h1>
        <p>{this.state.content.content}</p>
        <div className="Video-Wrapper" style={{ width: "35%" }}>
          <Iframe link={this.state.content.link1} />
        </div>
      </div>
    ) : (
      <Loader />
    );
  }
}
