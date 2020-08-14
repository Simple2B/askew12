import React from "react";

import CodeChart from "../code-chart";
import CodeBlock from "../code-block";
import CodeDescription from "../code-description";
import './code-sample.css'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const CodeSample = (props) => {

  const { code, chart, description_picture, language } = props.sample;

  return (
    <div className='code-meta'>
      <div>
        <CodeBlock code={code}/>
      </div>
      <div className='border-left pl-3 pr-3'>
        <Tabs>
          <TabList>
            <Tab><h5>Code Flowchart</h5></Tab>
            <Tab><h5>Word Flowchart</h5></Tab>
          </TabList>

          <TabPanel>
            <CodeChart chart={chart} />
          </TabPanel>
          <TabPanel>
            <CodeDescription description_picture={description_picture} language={language}/>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default CodeSample;