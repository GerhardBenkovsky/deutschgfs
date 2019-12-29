import React from "react";
import "./lessonstyle.css";

import Iframe from "./iframe";

import StartpageLoader from "../HOC/StartpageLoader";

import { ContentConsumer } from "../Context/contentContext";

function Lessons(props) {
  return (
    <ContentConsumer>
      {content => {
        return content.map((item, index) => (
          <div key={item.id} className="lessonCard" id={item.title}>
            <div className="text">
              <a href={"/lernen/" + item.id}>{item.title}</a>
              <p>{item.description}</p>
            </div>

            <div className="imgcontent">
              <Iframe link={item.link1} id={item.id} />
            </div>
          </div>
        ));
      }}
    </ContentConsumer>
  );
}

export default StartpageLoader(Lessons);
