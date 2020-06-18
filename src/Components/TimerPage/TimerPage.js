import React from "react";

import NavBar from "../NavBar/NavBar";
import Timer from "../StyledComponents/Timer/Timer";
import Button from "../StyledComponents/Button/Button";
import "./TimerPage.css";

class TimerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intervals: 5,
      activeTime: 20,
      restTime: 10,
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
    const currentState = "ACTIVE"
    return (
      <div className="App">
        <NavBar title="Use your timer" />
        <div className="activeState">{currentState}</div>
        <Timer seconds={remainingTime % 60}></Timer>
        Interval
        1/5
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
        Remaining time
      </div>
    );
  }
}

export default TimerPage;
