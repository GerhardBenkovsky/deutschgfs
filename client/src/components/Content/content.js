import React from "react";
import axios from "axios";

import "./contentPageStyle.css";

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: []
    };
  }

  componentDidMount() {
    axios
      .get(`/getdata/` + window.location.pathname.split("/")[2])
      .then(res => {
        this.setState({ content: res.data });
      });
  }

  render() {
    return this.state.content.map(item => (
      <div key={item.id} className="lesson">
        <h1>{item.title}</h1>
        <p>{item.content}</p>
      </div>
    ));
  }
}
