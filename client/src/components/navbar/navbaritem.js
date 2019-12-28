import React from "react";

export default function NavbarItem(props) {
  return props.items.map(item =>
    item.name === "About" ? (
      <li key={item.name}>
        <p onClick={props.aboutClick}>{item.name}</p>
      </li>
    ) : item.name === "Home" ? (
      <li>
        <a href={item.link}>
          <i className="fas fa-home"></i>
        </a>
      </li>
    ) : (
      <li key={item.name}>
        <a href={item.link}>{item.name}</a>
      </li>
    )
  );
}
