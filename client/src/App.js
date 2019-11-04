import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar/navbar";
import StartPage from "./components/StartPage/startpage";
import Content from "./components/Content/content";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Navbar: [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Help", link: "/help" },
        { name: "Contact", link: "/contact" }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Navbar items={this.state.Navbar} />
          <div className="Content">
            <Router>
              <Route path="/" exact component={StartPage} />
              <Route path="/:id" exact component={Content} />
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
