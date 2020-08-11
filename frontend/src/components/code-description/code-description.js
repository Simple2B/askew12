import React from "react";

import "./code-description.css";

export default class CodeDescription extends React.Component {
  render() {
    const { description_picture, language } = this.props;
    return (
      <div>
        <p>Language - {language}</p>
        <img className="askew-chart" alt='code-description' src={description_picture} />
      </div>
    );
  } 
}
