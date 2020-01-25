import React from "react";

import "./contentPageStyle.css";

import Iframe from "../StartPage/iframe";
import Error from "../StartPage/Error";
import { ContentConsumer } from "../Context/contentContext";

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ContentConsumer>
        {context =>
          !context.contentHasError ? (
            context.content.map(item =>
              item.id === window.location.pathname.split("/")[2] ? (
                <div key={item.id} className="lesson">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <div className="Video-Wrapper">
                    <Iframe link={item.logo} />
                  </div>
                  {item.link2 ? (
                    <a href={item.links.link1}>{item.links.text1}</a>
                  ) : null}
                </div>
              ) : null
            )
          ) : (
            <Error />
          )
        }
      </ContentConsumer>
    );
  }
}
