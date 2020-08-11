import React from 'react';

import './code-chart.css';

export default class CodeChart extends React.Component {
  render() {
    const { chart } = this.props;
    return (
      <div>
        <img className="askew-chart" alt='code-chart' src={chart} />
      </div>
      
    )
  }
}