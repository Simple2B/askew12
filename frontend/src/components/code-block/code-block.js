import React from 'react';

import './code-block.css';

export default class CodeBlock extends React.Component {
  render() {
    const { code } = this.props;
    return (
      <div className="p-3">
        <h4 className='mb-3'>Code block:</h4>
        <div className='code-block'>
          <pre><code>
{`${code}`}
          </code></pre>
        </div>
      </div>
    )
  }
}