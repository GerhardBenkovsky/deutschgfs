import React from "react";

export default function NavbarItem(props) {
  return props.items.map(item =>
    item.name === "About" ? (
      <li key={item.name}>
        <p onClick={props.aboutClick}>{item.name}</p>
      </li>
    ) : item.name === "Home" ? (
      <li key={item.name}>
        <i className="fas fa-home" onClick={props.scrollToTop}></i>
      </li>
    ) : (
      <li key={item.name}>
        <a href={item.link}>{item.name}</a>
      </li>
    )
  );
}
