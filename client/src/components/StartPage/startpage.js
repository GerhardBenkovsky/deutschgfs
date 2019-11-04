import React from "react";

export default class StartPage extends React.Component {
  constructor() {
    super();
    this.state = {};

    this.getdata = this.getdata.bind(this);
  }

  async getdata() {
    const response = await fetch("./getdata/all");
    const data = await response.json();
    this.setState(state => ({
      data: data
    }));
  }

  componentDidMount() {
    this.getdata();
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}
