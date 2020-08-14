import React from 'react';

import './code-block.css';

export default class CodeBlock extends React.Component {
  render() {
    const { code } = this.props;
    return (
      <div className="pl-3">
        <div className='code-block'>
          <pre><code>
{`${code}`}
          </code></pre>
        </div>
      </div>
    )
  }
}