import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import "./App.css";

import Navbar from "./components/navbar/navbar";
import Footer from "./components/Footer/Footer";
import StartPage from "./components/StartPage/startpage";
import Content from "./components/Content/content";
import AdminPanel from "./components/Admin/admin";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Navlinks: [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Help", link: "/help" },
        { name: "Contact", link: "/contact" }
      ],
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
        <Navbar Navbar={this.state.Navlinks} />
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
        <Footer links={this.state.Navlinks} />
      </div>
    );
  }
}

export default App;
