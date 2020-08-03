import React from "react";

import "./code-description.css";

export default class CodeDescription extends React.Component {
  render() {
    const { description, language } = this.props;
    return (
      <div>
        <hr></hr>
        <h3>Code description:</h3>
        <p>Language - {language}</p>
        <p>{description}</p>
      </div>
    );
  }
}
