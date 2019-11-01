import React from "react";
import "./display.css";

class Display extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    fetch("/getdata/all")
      .then(res => res.json())
      .then(data =>
        this.setState({ data }, () => console.log("data fetched..", data))
      );
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.data.map(item => (
            <li key={item.id}> {item.title} </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Display;
