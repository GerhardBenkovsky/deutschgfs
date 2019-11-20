import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/navbar/navbar";
import StartPage from "./components/StartPage/startpage";
import Content from "./components/Content/content";
import AdminPanel from "./components/Admin/admin";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const body = {
      display: "flex"
    };

    return (
      <div className="App">
        <Navbar />
        <div className="Content" style={body}>
          <Router>
            <Route path="/adminPanel" exact component={AdminPanel} />
            <Route exact path="/" component={StartPage} />

            <Route path="/lesson/:id" exact component={Content} />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
