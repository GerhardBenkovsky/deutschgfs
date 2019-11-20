import React from "react";

export default function NavbarItem(props) {
  const link = {
    textDecoration: "none",
    color: "white"
  };

  return props.items.map(item => (
    <li key={item.name}>
      <a href={item.link} style={link}>
        {item.name}
      </a>
    </li>
  ));
}
