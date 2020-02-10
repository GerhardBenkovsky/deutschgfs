import React from "react";

import "./contentPageStyle.css";

import Iframe from "../StartPage/iframe";
import Error from "../StartPage/Error";
import { ContentConsumer } from "../Context/contentContext";
import LinkFrame from "./link-frame";

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
                  {item.links.map(link => (
                    <LinkFrame link={link} key={link.text} />
                  ))}
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
