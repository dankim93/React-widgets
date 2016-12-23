import React from 'react';
import ReactDOM from 'react-dom';

import Tabs from './tabs';

const tabData = [
  {title: "tab 1", content: "content for tab 1"},
  {title: "tab 2", content: "content for tab 2"},
  {title: "tab 3", content: "content for tab 3"}
];

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Tabs tabs={tabData} />, document.getElementById('root'));
});
