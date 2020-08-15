import React from 'react';
import logo from './askew_search_logo.png'
import './logo-and-header.css';
// test comment
const LogoAndHeader = () => {
  return (
    <div className="askew-logo-and-header">
      <h1 className="askew-title">Askew13</h1>
      <h5 className="askew-slogan">Some average coding website</h5>
      <img className="askew-logo" src={logo} alt="search-png" />
    </div>
  );
}

export default LogoAndHeader;