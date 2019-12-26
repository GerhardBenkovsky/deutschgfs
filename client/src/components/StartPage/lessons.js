import React from "react";
import "./lessonstyle.css";

import Iframe from "./iframe";

function Lessons(props) {
  return props.content.map(item => (
    <div key={item.id} className="lessonCard">
      <div className="text">
        <a href={"/lesson/" + item.id}>{item.title}</a>
        <p>{item.content}</p>
      </div>

      <div className="imgcontent"></div>
      <Iframe link={item.link1} id={item.id} />
    </div>
  ));
}

export default Lessons;
