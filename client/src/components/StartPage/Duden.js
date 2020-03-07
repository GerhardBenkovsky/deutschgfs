import React, { Component } from 'react';
import axios from 'axios';

export default class Duden extends Component {
  async search(word) {
    try {
      const response = await axios.get(
        'https://de.wikipedia.org/w/api.php?action=query&prop=revisions&titles=Pizza&rvslots=*&rvprop=content&formatversion=2&format=json'
      );
      console.log(response);
    } catch (e) {
      console.log(e);
    }

    return word;
  }

  render() {
    return (
      <div id="duden">
        <p> gestern</p>
        {this.search('gestern')}
      </div>
    );
  }
}
