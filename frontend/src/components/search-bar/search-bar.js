import React from 'react';

import './search-bar.css';

export default class SearchBar extends React.Component {

  state = {
    searchInput: ''
  }

  onSearchChange = (e) => {
    const searchInput = e.target.value;
    this.setState({ searchInput });
    this.props.onSearchChange(searchInput);
  };

  render() {
    
    return (
      <input className="form-control-lg askew-search-bar" 
        type='search' 
        placeholder='Our database is yours'
        onChange={this.onSearchChange}></input>
    )
  }
}