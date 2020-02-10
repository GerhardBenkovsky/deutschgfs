import React from "react";

import ReactPlayer from "react-player";

function LinkFrame(props) {
  let splited = props.link.split("/");
  let yout = splited[2].split(".");

  if (yout[1] === "youtube") {
    return (
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url={props.link}
          width="100%"
          height="100%"
          controls={true}
        />
      </div>
    );
  }
  splited = props.link.split(".");
  let img = splited[splited.length - 1];
  if (img === "png" || img === "jpg" || img === "tiff") {
    return <img className="frame" src={props.link} alt={props.link} />;
  }
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      {props.text}
    </a>
  );
}

export default LinkFrame;
