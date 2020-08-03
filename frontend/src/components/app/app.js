import React from "react";

import AppHeaderTitle from '../app-header-title';
import SearchBar from '../search-bar';
import CodeSample from '../code-sample';
import CodeApiService from '../../service/ApiService';


export default class App extends React.Component {
  apiService = new CodeApiService();

  state = {
    results: [],  // all data from server
    searchInput: '', // data from searchbox
  }

  updateResults() {
    return this.apiService.getAllSamples().then(response => {
      console.log('Fetched from API', response);
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
      console.log('Not enough data to query API');
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
    console.log('resultSearch', resultSearch);
    const result = resultSearch.length ? resultSearch[0] : null;
    console.log('Result', result);
    return (
      <div>
        <div className='ml-auto text-center'>
          <AppHeaderTitle />
          <SearchBar onSearchChange={ this.onSearchChange }/>
        </div>
        <hr></hr>
        <div>
          {result ? <CodeSample sample={result}/> : <h1>Princess is in another castle.</h1>}
        </div>
      </div>
    );
  };
};
