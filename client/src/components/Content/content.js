import React from "react";

import "./contentPageStyle.css";

import Iframe from "../StartPage/iframe";
import Error from "../StartPage/Error";
import { ContentConsumer } from "../Context/contentContext";

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [],
      load: false
    };
  }

  componentDidMount() {
    for (let i = 0; i < this.props.content.length; i++) {
      if (this.props.content[i].id === window.location.pathname.split("/")[2]) {
        this.setState({ content: this.props.content[i] });
        this.setState({ load: true });
      }
    }
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

    // this.state.load ? (
    //   <div key={this.state.content.id} className="lesson">
    //     <h1>{this.state.content.title}</h1>
    //     <p>{this.state.content.description}</p>
    //     <div className="Video-Wrapper">
    //       <Iframe link={this.state.content.link1} />
    //     </div>
    //     {this.state.content.link2 ? (
    //       <a href={this.state.content.link2}>{this.state.content.link2}</a>
    //     ) : null}
    //   </div>
    // ) : (
    //   <Loader />
    // );
  }
}
