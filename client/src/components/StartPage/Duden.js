import React, { Component } from 'react';
// import axios from 'axios';

export default class Duden extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wikiSearchReturnValues: [],
      wikiSearchTerm: ''
    };
  }

  useWikiSearchEngine = e => {
    e.preventDefault();

    this.setState({
      wikiSearchReturnValues: []
    });

    const pointerToThis = this;

    let url = 'https://de.wikipedia.org/w/api.php';

    const params = {
      action: 'query',
      list: 'search',
      srsearch: this.state.WikiSearchTerms,
      format: 'json'
    };

    url = url + '?origin=*';
    Object.keys(params).forEach(key => {
      url += '&' + key + '=' + params[key];
    });

    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        //console.log(response);

        for (let key in response.query.search) {
          pointerToThis.state.wikiSearchReturnValues.push({
            queryResultPageFullURL: 'no link',
            queryResultPageID: response.query.search[key].pageid,
            queryResultPageTitle: response.query.search[key].title,
            queryResultPageSnippet: response.query.search[key].snippet
          });
        }
      })
      .then(function(response) {
        for (let key in pointerToThis.state.wikiSearchReturnValues) {
          //console.log(pointerToThis.state.wikiSearchReturnValues);
          let page = pointerToThis.state.wikiSearchReturnValues[key];
          let pageID = page.queryResultPageID;
          let urlForRetrievingPageURLByPageID = `https://de.wikipedia.org/w/api.php?origin=*&action=query&prop=info&pageids=${pageID}&inprop=url&format=json`;

          fetch(urlForRetrievingPageURLByPageID)
            .then(function(response) {
              return response.json();
            })
            .then(function(response) {
              page.queryResultPageFullURL =
                response.query.pages[pageID].fullurl;

              pointerToThis.forceUpdate();
            });
        }
      });
  };

  changeWikiSearchTerms = e => {
    this.setState({
      WikiSearchTerms: e.target.value
    });
    console.log(this.state.wikiSearchTerm);
  };

  componentDidMount() {}

  render() {
    let wikiSearchResults = [];
    //console.log(this.state.wikiSearchReturnValues);

    let word;

    if (this.state.wikiSearchReturnValues.length > 0) {
      word = document.getElementById('search');
    }

    for (let key in this.state.wikiSearchReturnValues) {
      if (
        word.value.toUpperCase() ===
        this.state.wikiSearchReturnValues[
          key
        ].queryResultPageTitle.toUpperCase()
      ) {
        wikiSearchResults.push(
          <div className="searchResultDiv" key={key}>
            <h3>
              <a
                href={
                  this.state.wikiSearchReturnValues[key].queryResultPageFullURL
                }
              >
                {this.state.wikiSearchReturnValues[key].queryResultPageTitle}
              </a>
            </h3>
            <span className="link">
              <a
                href={
                  this.state.wikiSearchReturnValues[key].queryResultPageFullURL
                }
              >
                {this.state.wikiSearchReturnValues[key].queryResultPageFullURL}
              </a>
            </span>
            <p
              className="description"
              dangerouslySetInnerHTML={{
                __html: this.state.wikiSearchReturnValues[key]
                  .queryResultPageSnippet
              }}
            ></p>
          </div>
        );
      }
    }

    return (
      <div id="duden">
        <h1>Wikipedia Search Engine</h1>
        <form action="">
          <input
            type="text"
            value={this.state.WikiSearchTerms || ''}
            onChange={this.changeWikiSearchTerms}
            placeholder="Search Wikipedia Articles"
            id="search"
          />
          <button type="submit" onClick={this.useWikiSearchEngine}>
            Search
          </button>
        </form>
        {wikiSearchResults}
      </div>
    );
  }
}
