import React from "react";

import "./Loader.css";

const videoLoaderHOC = WrappedComponent => {
  return class LoaderHOC extends React.Component {
    render() {
      return this.props.link ? (
        <WrappedComponent link={this.props.link} id={this.props.id} />
      ) : (
        <div
          className="Loader"
          style={{ margin: "auto", height: "100%" }}
        ></div>
      );
    }
  };
};

export default videoLoaderHOC;
