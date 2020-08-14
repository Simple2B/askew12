import React from 'react';
import InnerImageZoom from 'react-inner-image-zoom';

import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import './code-chart.css';

export default class CodeChart extends React.Component {
  render() {
    const { chart } = this.props;
    return (
      <div className="image-box">
        <InnerImageZoom src={chart} zoomSrc={chart} 
          className="image-zoom-box"
          moveType="drag"
        />
      </div>
    )
  }
}