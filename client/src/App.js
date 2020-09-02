import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import '../src/index.css';

import Navbar from './components/navbar/navbar';
import Contact from './components/Contact/contact';
import StartPage from './components/StartPage/startpage';
import Content from './components/Content/content';
import Error from './components/HOC/Error';
import ScrollToTop from './components/scrollToTop';

import { ContentProvider } from './components/Context/contentContext';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Navlinks: [
        { name: 'Kontakt', link: '/kontakt' },
        { name: 'Home', link: '/' },
      ],
      contentHasError: false,
      contentErrorType: '',
      content: [],
    };

    this.getLessons = this.getLessons.bind(this);
  }

  async getLessons() {
    try {
      const response = await axios.get(
        'https://deuch-basics-api.glitch.me/getAppData/'
      );
      this.setState({ content: response.data });
      this.setState((prevState) => ({ contentHasError: false }));
      window.localStorage.setItem('data', JSON.stringify(response.data));
    } catch (error) {
      console.log(error);

      this.setState((prevState) => ({ contentHasError: true }));

      if (error.response) {
        this.setState({ contentErrorType: 'serverDown' });
      } else if (error.request) {
        this.setState((prevState) => ({
          contentErrorType: 'connectionProblem',
        }));
      } else {
        this.setState((prevState) => ({
          contentErrorType: 'other',
        }));
      }
    }
  }

  componentDidMount() {
    document.title = 'Deutsch-Basics';

    if (window.localStorage.getItem('data')) {
      this.setState({
        content: JSON.parse(window.localStorage.getItem('data')),
      });
    } else {
      this.getLessons();
    }

    if (window.localStorage.getItem('theme') !== undefined) {
      if (window.localStorage.getItem('theme') === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
      } else {
        window.localStorage.setItem('theme', 'dark');
      }
    }
  }

  changeTheme = () => {
    const theme =
      document.documentElement.getAttribute('data-theme') === 'dark'
        ? 'light'
        : 'dark';

    document.documentElement.setAttribute('data-theme', theme);

    window.localStorage.setItem('theme', theme);
  };

  render() {
    return (
      <div className="App">
        <ContentProvider value={this.state}>
          {this.state.contentHasError ? (
            <Error />
          ) : (
            <Router>
              <Navbar
                changeTheme={this.changeTheme}
                Navbar={this.state.Navlinks}
              />

              <ScrollToTop />
              <div className="Content">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={() => (
                      <StartPage hasError={this.state.contentHasError} />
                    )}
                  />

                  <Route path="/lernen/:id" exact component={Content} />

                  <Route exact path="/kontakt" component={Contact} />
                </Switch>
              </div>
            </Router>
          )}
        </ContentProvider>
      </div>
    );
  }
}

export default App;
