import React from "react";

import "./sidebarstyle.css";

import { ContentConsumer } from "../Context/contentContext";

export default function SideBar(props) {
  return (
    <div className="banner-bar">
      <ContentConsumer>
        {context => (
          <ul>
            {context.content.map((item, index) => (
              <li key={item.id + index}>
                <p onClick={props.scrollIntoView}>{item.title}</p>
              </li>
            ))}
          </ul>
        )}
      </ContentConsumer>
    </div>
  );
}
