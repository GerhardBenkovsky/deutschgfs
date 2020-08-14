import React from 'react';

import './lessonstyle.css';

export default function Banner() {
  return (
    <div className="banner" style={{ textAlign: 'center' }}>
      <h1>&lt;{document.title}&gt;</h1>
    </div>
  );
}
