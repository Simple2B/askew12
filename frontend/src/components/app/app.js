import React from "react";

import SearchBar from '../search-bar';
import CodeSample from '../code-sample';
import CodeApiService from '../../service/ApiService';
import LogoAndHeader from '../logo-and-header';
import ScrollComponent from '../scroll-arrow';

import ScrollIntoView from 'react-scroll-into-view';

import './app.css';


export default class App extends React.Component {
  apiService = new CodeApiService();

  state = {
    results: [],  // all data from server
    searchInput: '', // data from searchbox
  }

  updateResults() {
    return this.apiService.getAllSamples().then(response => {
      this.setState({
        results: response
      });
    });
  }

  constructor() {
    super();
    this.updateResults();
  }

  search() {
    if (this.state.searchInput.length < 4) {
      return [];
    }
    return this.state.results.filter((item) => {
      return item.title
        .toLowerCase()
        .indexOf(this.state.searchInput.toLowerCase()) > -1;
    });
  }

  onSearchChange = (searchInput) => {
    this.setState({
      searchInput: searchInput
    });
    console.log('Search input: ', searchInput);
  }

  render() {
    const resultSearch = this.search();

    const result = resultSearch.length ? resultSearch[0] : null;

    return (
      <div className="askew-react-app">
        <div className='askew-header' id='askew-header'>
          <LogoAndHeader />
          <SearchBar onSearchChange={ this.onSearchChange }/>
          <div className='scroll-button-container'>
            {result ? <ScrollIntoView selector="#askew-code-sample">
              <button className="btn btn-outline-info scroll-btn shadow-none">
                Check it out!
              </button>
            </ScrollIntoView> : <div></div>}
          </div>
          <ScrollComponent />
        </div>
        <div id='askew-code-sample'>
          {result ? <CodeSample sample={result}/> : 
            <div></div>}
        </div>
      </div>
    );
  };
};
