import React from "react";

import "./Loader.css";

const StartpageLoader = WrappedComponent => {
  return class StartpageLoader extends React.Component {
    render() {
      return this.props.content.length !== 0 ? (
        <WrappedComponent content={this.props.content} />
      ) : (
        <div
          className="Loader"
          style={{ margin: "auto", placeSelf: "center" }}
        ></div>
      );
    }
  };
};

export default StartpageLoader;
