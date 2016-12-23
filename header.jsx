import React from 'react';

const Header = (props) => (
  <ul>
    {
      props.tabs.map((tab, idx) => (
        <h1 key={tab.title}
          onClick={this.setIndex.bind(this, idx)}>
          {tab.title}
        </h1>
      ))
    }
  </ul>
);

export default Header;
