import React from "react";

import "./code-description.css";

export default class CodeDescription extends React.Component {
  render() {
    const { description, language } = this.props;
    return (
      <div>
        <p>Language - {language}</p>
        <p>{description}</p>
      </div>
    );
  }
}
