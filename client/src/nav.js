import React from "react";

class Nav extends React.Component {
  state = {};
  render() {
    let navdeco = {
      background: "white",
      width: "100%",
      height: "60px",
      alignContent: "center",
      fontSize: "1em"
    };
    let uldeco = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      listStyle: "none",
      color: "red"
    };
    return (
      <nav style={navdeco}>
        <ul style={uldeco}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">List</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
