import React from "react";

export default function NavbarItem(props) {
  const style = {
    textDecoration: "none",
    color: "white",
    alignSelf: "center"
  };

  return props.items.map(item => (
    <li key={item.name}>
      <a href={item.link} style={style}>
        {item.name}
      </a>
    </li>
  ));
}
