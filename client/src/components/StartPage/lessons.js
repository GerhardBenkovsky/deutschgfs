import React from "react";
import "./lessonstyle.css";

import Iframe from "./iframe";

import StartpageLoader from "../HOC/StartpageLoader";

function Lessons(props) {
  return props.content.map(item => (
    <div key={item.id} className="lessonCard">
      <div className="text">
        <a href={"/lernen/" + item.id}>{item.title}</a>
        <p>{item.content}</p>
      </div>

      <div className="imgcontent">
        <Iframe link={item.link1} id={item.id} />
      </div>
    </div>
  ));
}

export default StartpageLoader(Lessons);
