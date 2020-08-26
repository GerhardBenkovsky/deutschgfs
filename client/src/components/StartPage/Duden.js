import React, { Component } from 'react';

import './duden.css';

export default class Duden extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wikiSearchReturnValues: [],
      wikiSearchTerm: '',
    };
  }

  useWikiSearchEngine = (e) => {
    e.preventDefault();

    this.setState({
      wikiSearchReturnValues: [],
    });

    const pointerToThis = this;

    let url = 'https://de.wikipedia.org/w/api.php';

    const params = {
      action: 'query',
      list: 'search',
      srsearch: this.state.WikiSearchTerms,
      format: 'json',
    };

    url = url + '?origin=*';
    Object.keys(params).forEach((key) => {
      url += '&' + key + '=' + params[key];
    });

    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        console.log(response);

        for (let key in response.query.search) {
          pointerToThis.state.wikiSearchReturnValues.push({
            queryResultPageFullURL: 'no link',
            queryResultPageID: response.query.search[key].pageid,
            queryResultPageTitle: response.query.search[key].title,
            queryResultPageSnippet: response.query.search[key].snippet,
          });
        }
      })
      .then(function (response) {
        for (let key in pointerToThis.state.wikiSearchReturnValues) {
          let page = pointerToThis.state.wikiSearchReturnValues[key];
          let pageID = page.queryResultPageID;
          let urlForRetrievingPageURLByPageID = `https://de.wikipedia.org/w/api.php?origin=*&action=query&prop=info&pageids=${pageID}&inprop=url&format=json`;

          fetch(urlForRetrievingPageURLByPageID)
            .then(function (response) {
              return response.json();
            })
            .then(function (response) {
              page.queryResultPageFullURL =
                response.query.pages[pageID].fullurl;

              pointerToThis.forceUpdate();
            });
        }
      });
  };

  changeWikiSearchTerms = (e) => {
    this.setState({
      WikiSearchTerms: e.target.value,
    });
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
          <div className=" searchResultDiv" key={key}>
            <h3>
              <a
                href={
                  this.state.wikiSearchReturnValues[key].queryResultPageFullURL
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                {this.state.wikiSearchReturnValues[key].queryResultPageTitle}
              </a>
            </h3>

            <p
              className="description"
              dangerouslySetInnerHTML={{
                __html: this.state.wikiSearchReturnValues[key]
                  .queryResultPageSnippet, //.split('Siehe auch')[0]
              }}
            ></p>

            <span className="link">
              <a
                href={
                  this.state.wikiSearchReturnValues[key].queryResultPageFullURL
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                {this.state.wikiSearchReturnValues[key].queryResultPageFullURL}
              </a>
            </span>
          </div>
        );
      }
    }

    return (
      <div id="Wörterbuch">
        <h1>Wörterbuch</h1>
        <form action="">
          <label>
            <input
              type="text"
              value={this.state.WikiSearchTerms || ''}
              onChange={this.changeWikiSearchTerms}
              placeholder="Stichwort"
              id="search"
            ></input>
            <button type="submit" onClick={this.useWikiSearchEngine}>
              Suchen
            </button>
          </label>

          <p id="warning">Ergebnisse ungenau</p>
        </form>
        {wikiSearchResults.length !== 0 ? (
          wikiSearchResults
        ) : (
          <div>Gesuchtes Wort eingeben</div>
        )}
      </div>
    );
  }
}
