import React from "react";

import AppHeaderTitle from '../app-header-title';
import SearchBar from '../search-bar';
import CodeSample from '../code-sample';
import CodeApiService from '../../service/ApiService';

import logo from './askew_search_logo.png'
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
    if (this.state.searchInput.length < 3) {
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
      <div>
        <div className='askew-header'>
          <img className="askew-logo" src={logo} alt="search-png" />
          <SearchBar onSearchChange={ this.onSearchChange }/>
        </div>
        <hr></hr>
        <div>
          {result ? <CodeSample sample={result}/> : 
            <div className='prompt text-center'>
              <h4>Use our search bar to find what you need...</h4>
            </div>}
        </div>
      </div>
    );
  };
};
