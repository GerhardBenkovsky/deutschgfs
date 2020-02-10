import React from "react";

import ReactPlayer from "react-player";

import videoLoader from "../HOC/videoLoader";

function LinkFrame(props) {
  let splited = props.link.link.split("/");
  let yout = splited[2].split(".");

  if (yout[1] === "youtube") {
    return (
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url={props.link.link}
          width="100%"
          height="100%"
          controls={true}
        />
      </div>
    );
  }
  return (
    <a href={props.link.link} target="_blank">
      {props.link.text}
    </a>
  );
}

export default videoLoader(LinkFrame);
