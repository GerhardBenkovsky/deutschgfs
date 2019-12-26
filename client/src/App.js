import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import "./App.css";

import Navbar from "./components/navbar/navbar";
import StartPage from "./components/StartPage/startpage";
import Content from "./components/Content/content";
import AdminPanel from "./components/Admin/admin";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      content: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://cdn.glitch.com/cfefdc52-4f33-4755-8ef1-756a1551887c%2Fdata-test.JSON?v=1577300605946`
      )
      .then(res => {
        this.setState({ content: res.data });
      });
    window.title = "Selbsthilegruppe Deutsch";
  }

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
            <Route
              exact
              path="/"
              component={() => <StartPage content={this.state.content} />}
            />

            <Route
              path="/lesson/:id"
              exact
              component={() => <Content content={this.state.content} />}
            />
          </Router>
        </div>
        <footer style={{ alignSelf: "end", height: "100px" }}>
          This is the footer
        </footer>
      </div>
    );
  }
}

export default App;
