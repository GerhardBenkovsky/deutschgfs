import React from "react";

export default function Iframe(props) {
  let splited = props.link.split("/");
  let yout = splited[2].split(".");

  if (yout[1] === "youtube") {
    return (
      <iframe
        className="frame"
        title={props.id}
        src={props.link}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    );
  }

  return <img className="frame" src={props.link} alt={props.link} />;
}
