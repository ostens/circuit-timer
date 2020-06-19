import React from "react";

import PlayPauseButton from "../StyledComponents/PlayPauseButton/PlayPauseButton";
import NavBar from "../NavBar/NavBar";
import IntervalTimer from "../StyledComponents/IntervalTimer/IntervalTimer";
import Timer from "../StyledComponents/Timer/Timer";
import "./TimerPage.css";

class TimerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intervals: 5,
      activeTime: 20,
      restTime: 10,
      totalTime: 300,
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
    const { remainingTime, countingDown, intervals } = this.state;
    const currentState = remainingTime > 295 ? "Active" : "Rest";
    const currentInterval = 1;
    return (
      <>
        <NavBar title="Use your timer" />
        <IntervalTimer
          currentInterval={currentInterval}
          intervals={intervals}
          state={currentState}
          seconds={remainingTime - 280}
        />
        <Timer
          seconds={remainingTime}
        />
        Remaining
        <div className="controlBar">
          <button className="textButton">
            Delete
          </button>
          <button
            className="textButton"
            onClick={() => this.handleReset()}>
            Reset
          </button>
          <PlayPauseButton
            action={countingDown ? "Pause" : "Play"}
            onClick={() => this.handlePause()}
          />
        </div>
      </>
    );
  }
}

export default TimerPage;
