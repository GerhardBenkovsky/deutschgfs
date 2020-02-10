import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import "./App.css";

import Navbar from "./components/navbar/navbar";
import Footer from "./components/Footer/Footer";
import StartPage from "./components/StartPage/startpage";
import Content from "./components/Content/content";
import AdminPanel from "./components/Admin/admin";

import { ContentProvider } from "./components/Context/contentContext";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Navlinks: [
        { name: "Help", link: "/help" },
        { name: "Contact", link: "/contact" },
        { name: "About", link: "/about" },
        { name: "Home", link: "/" }
      ],
      contentHasError: false,
      contentErrorType: "",
      content: []
    };

    this.getLessons = this.getLessons.bind(this);
  }

  async getLessons() {
    try {
      const response = await axios.get(
        "https://cdn.glitch.com/cfefdc52-4f33-4755-8ef1-756a1551887c%2Fdata-test.JSON?v=1581352347330"
      ); //"https://cdn.glitch.com/cfefdc52-4f33-4755-8ef1-756a1551887c%2Fdata-test.JSON?v=1581352347330"
      this.setState({ content: response.data });
    } catch (error) {
      console.log(error);
      this.setState({ contentHasError: true });
      if (error.response) {
        this.setState({ contentErrorType: "Server Down" });
      } else if (error.request) {
        this.setState({ contentErrorType: "Connection problem" });
      } else {
        this.setState({
          contentErrorType: "There seems to be a Problem,please try again later"
        });
      }
    }
  }

  componentDidMount() {
    this.getLessons();
  }

  render() {
    const body = {
      display: "flex"
    };

    return (
      <div className="App">
        <Navbar
          Navbar={this.state.Navlinks}
          style={{ paddingBottom: this.state.showNav, transition: "0.4s" }}
        />

        <ContentProvider value={this.state}>
          <div className="Content" style={body}>
            <Router>
              <Route path="/adminPanel" exact component={AdminPanel} />
              <Route
                exact
                path="/"
                component={() => (
                  <StartPage hasError={this.state.contentHasError} />
                )}
              />

              <Route
                path="/lernen/:id"
                exact
                component={() => <Content content={this.state.content} />}
              />
            </Router>
          </div>

          <Footer />
        </ContentProvider>
      </div>
    );
  }
}

export default App;
