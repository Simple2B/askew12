import React from "react";

import CodeChart from "../code-chart";
import CodeBlock from "../code-block";
import CodeDescription from "../code-description";
import './code-sample.css'



export default class CodeSample extends React.Component {

  render() {
    // const { sample } = this.props;
    const { code, chart, description, language } = this.props.sample;
    return (
      <div className='d-flex code-meta'>
        <div className='w-50'>
          <CodeBlock code={code}/>
        </div>
        <div className='w-50 border-left pl-3'>
          <CodeChart chart={chart}/>
          <CodeDescription description={description} language={language}/>
        </div>
      </div>
    );
  }
}
