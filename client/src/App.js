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
      name: "Selbsthilfegruppe Deutsch"
    };
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Navbar />
          <Router>
            <Route path="/" exact component={StartPage} />
            <Route path="/:id" exact component={Content} />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
