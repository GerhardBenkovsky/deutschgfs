import React from "react";
import "./lessonstyle.css";

export default function Lessons(props) {
  console.log(props);
  return props.data.map(item => (
    <div key={item.id} className="lessonCard">
      <a href={"/lesson/" + item.id}>
        <h2>{item.title}</h2>
      </a>
      <p>{item.content}</p>
    </div>
  ));
}
