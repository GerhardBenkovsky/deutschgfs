import React from 'react';

import './Loader.css';

const videoLoaderHOC = (WrappedComponent) => {
  return () =>
    this.props.link !== '' ? (
      <WrappedComponent link={this.props.link} id={this.props.id} />
    ) : (
      <div
        className="Loader"
        style={{ margin: 'auto', marginTop: '25%', placeSelf: 'center' }}
      ></div>
    );
};

export default videoLoaderHOC;
