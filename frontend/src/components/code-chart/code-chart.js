import React from 'react';

import './code-chart.css';

export default class CodeChart extends React.Component {
  render() {
    const { chart } = this.props;
    return (
      <div>
        <h3>Chart:</h3>
        <hr></hr>
        <img alt='code-chart' src={chart} />
      </div>
      
    )
  }
}