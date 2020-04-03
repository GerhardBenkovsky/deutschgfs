import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import '../src/index.css';

import Navbar from './components/navbar/navbar';
import Footer from './components/Footer/Footer';
import StartPage from './components/StartPage/startpage';
import Content from './components/Content/content';

import { ContentProvider } from './components/Context/contentContext';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Navlinks: [
        { name: 'Contact', link: '#' },
        { name: 'Home', link: '/' }
      ],
      contentHasError: false,
      contentErrorType: '',
      content: [],
      darkTheme: true
    };

    this.getLessons = this.getLessons.bind(this);
  }

  async getLessons() {
    try {
      const response = await axios.get(
        'https://cdn.glitch.com/cfefdc52-4f33-4755-8ef1-756a1551887c%2Fdata-test.JSON?v=1583770577314'
      ); //"https://cdn.glitch.com/cfefdc52-4f33-4755-8ef1-756a1551887c%2Fdata-test.JSON?v=1583770577314"
      this.setState({ content: response.data });
    } catch (error) {
      console.log(error);
      this.setState({ contentHasError: true });
      if (error.response) {
        this.setState({ contentErrorType: 'Server Down' });
      } else if (error.request) {
        this.setState({ contentErrorType: 'Connection problem' });
      } else {
        this.setState({
          contentErrorType: 'There seems to be a Problem,please try again later'
        });
      }
    }
  }

  componentDidMount() {
    document.title = 'Deutsch-Basics';
    this.getLessons();
    if (window.localStorage.getItem('theme') === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      window.localStorage.setItem('theme', 'dark');
    }
  }

  changeTheme = () => {
    this.setState(prev => ({ darkTheme: !prev.darkTheme }));

    let theme = this.state.darkTheme ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);

    window.localStorage.setItem(
      'theme',
      this.state.darkTheme ? 'dark' : 'light'
    );
  };

  render() {
    const body = {
      display: 'flex'
    };

    return (
      <div className="App">
        <Navbar changeTheme={this.changeTheme} Navbar={this.state.Navlinks} />

        <ContentProvider value={this.state}>
          <div className="Content" style={body}>
            <Router>
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
