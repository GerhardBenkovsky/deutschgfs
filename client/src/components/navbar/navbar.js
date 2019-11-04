import React from "react";

export default class Navbar extends React.Component {
  state = {};
  render() {
    const nav = {
      height: 60,
      background: "#282c34",
      width: "100%",
      position: "fixed",
      margin: "0",
      zIndex: "100"
    };
    const navul = {
      listStyle: "none",
      display: "flex",
      flexDirection: "row",
      margin: "auto",
      justifyContent: "space-around",
      padding: "10px 20px 10px 20px"
    };

    return (
      <nav style={nav}>
        <ul style={navul}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/users">Users</a>
          </li>
        </ul>
      </nav>
    );
  }
}
