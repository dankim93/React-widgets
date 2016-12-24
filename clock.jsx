import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentTime: new Date()};
  }

  render() {
    const currentDate = this.state.currentTime.toDateString();
    const currentTime = this.state.currentTime.toLocaleTimeString();
    return (
      <div className="clock">
        <div className="clock-left">
          Time:
          <br />
          Date:
        </div>
        <div className="clock-right">
          {currentTime}
          <br />
          {currentDate}
        </div>
    </div>
    );
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({currentTime: new Date()});
    }, 1000);
  }
}

export default Clock;
