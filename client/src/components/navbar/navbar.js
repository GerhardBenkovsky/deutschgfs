import React from "react";

import NavbarItem from "./navbaritem";

export default function Navbar(props) {
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
        <NavbarItem items={props.items} />
      </ul>
    </nav>
  );
}
