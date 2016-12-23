import React from 'react';

class Tabs extends React.Component{
  constructor (props){
    super(props);
    this.state = { index: 0 };
  }

  setIndex(idx) {
    this.setState({index: idx});
  }

  render() {
    const tabHeaders = this.props.tabs.map((tab, idx) => (
      <h1 key={tab.title}
        onClick={this.setIndex.bind(this, idx)}>
        {tab.title}
      </h1>
    ));
    const content = this.props.tabs[this.state.index].content;
    return (
      <div className="tabs">
        <ul>
          {tabHeaders}
        </ul>
        <article>
          {content}
        </article>
      </div>
    );
  }
}

export default Tabs;
