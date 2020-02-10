import React from "react";

import "./footer.css";
import { ContentConsumer } from "../Context/contentContext";

export default function Footer() {
  return (
    <ContentConsumer>
      {context => (
        <footer>
          <section id="footer-left">
            This Page was build as part of a Scoolproject
          </section>
          <section id="footer-right">
            <ul>
              {context.Navlinks.map(item =>
                item.name === "About" ? (
                  ""
                ) : item.name === "Home" ? (
                  ""
                ) : (
                  <li key={item.name}>
                    <a href={item.link}>{item.name}</a>
                  </li>
                )
              )}
            </ul>
          </section>
        </footer>
      )}
    </ContentConsumer>
  );
}
