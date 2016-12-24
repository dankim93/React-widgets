import React from 'react';
import ReactDOM from 'react-dom';

import Tabs from './tabs';
import Clock from './clock';
import Weather from './weather';

const tabData = [
  {title: "tab 1", content: "content for tab 1"},
  {title: "tab 2", content: "content for tab 2"},
  {title: "tab 3", content: "content for tab 3"}
];

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Tabs tabs={tabData} />, document.getElementById('root'));
  ReactDOM.render(<Clock />, document.getElementById('clock'));
  ReactDOM.render(<Weather />, document.getElementById('weather'));
});
