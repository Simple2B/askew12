import React from "react";
import InnerImageZoom from 'react-inner-image-zoom';

import "./code-description.css";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';

export default class CodeDescription extends React.Component {
  render() {
    const { description_picture, language } = this.props;
    return (
      <div className="image-box">
        <InnerImageZoom src={description_picture} zoomSrc={description_picture} 
          className="image-zoom-box"
          moveType="drag"
        />
      </div>
    );
  } 
}
