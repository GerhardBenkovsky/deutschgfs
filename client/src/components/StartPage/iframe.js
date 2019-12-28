import React from "react";

import ReactPlayer from "react-player";

import videoLoader from "../HOC/videoLoader";

function Iframe(props) {
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

  return <img className="frame" src={props.link} alt={props.link} />;
}

export default videoLoader(Iframe);
