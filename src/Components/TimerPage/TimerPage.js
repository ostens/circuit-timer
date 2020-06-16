import React from "react";

import Timer from "../StyledComponents/Timer/Timer";
import Button from "../StyledComponents/Button/Button";
import "./TimerPage.css";

class TimerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      remainingTime: 300,
      countingDown: false,
      active: false,
    }
    this.countDown = this.countDown.bind(this);
  }

  startCountdown() {
    let intervalId = setInterval(this.countDown, 1000);
    this.setState({ intervalId: intervalId });
  }

  stopCountdown() {
    clearInterval(this.state.intervalId);
  }

  countDown() {
    let { remainingTime, countingDown } = this.state;
    if (remainingTime > 0 && countingDown) {
      this.setState({
        remainingTime: remainingTime - 1
      });
    }
  }

  handlePause() {
    let { countingDown, active } = this.state;
    if (!active) { this.startCountdown() };
    this.setState({
      active: true,
      countingDown: !countingDown
    })
  }

  handleReset() {
    let { totalTime } = this.state;
    this.stopCountdown();
    this.setState({
      active: false,
      countingDown: false,
      remainingTime: totalTime
    })
  }

  render() {
    const { remainingTime, countingDown } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Use timer</h1>
          <div className="controlButtonWrapper">
            <Button
              title={countingDown ? "Pause" : "Play"}
              disabled={false}
              onClick={() => this.handlePause()}
            />
            <Button
              title="Reset"
              disabled={false}
              onClick={() => this.handleReset()}
            />
          </div>
          <Timer
            seconds={remainingTime}
          />
        </header>
      </div>
    );
  }
}

export default TimerPage;
