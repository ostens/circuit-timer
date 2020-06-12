import React from "react";

import Timer from "../Timer/Timer";
import Button from "../Button/Button";
import InputCard from "../InputCard/InputCard";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTime: 20,
      restTime: 10,
      intervals: 5,
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

  handleUpdate(name, value) {
    this.setState({
      [name]: value
    });
    this.updateTotal();
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

  updateTotal() {
    const { activeTime, restTime, intervals } = this.state;
    const totalTime = intervals * (activeTime + restTime);
    this.setState({
      totalTime: totalTime
    });
  }

  render() {
    const { remainingTime, activeTime, restTime, intervals, countingDown } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Circuit timer</h1>
          <InputCard
            title="Active time"
            name="activeTime"
            time={activeTime.toString()}
            updateTime={(name, value) => this.handleUpdate(name, parseInt(value))}
          />
          <InputCard
            title="Rest time"
            name="restTime"
            updateTime={(name, value) => this.handleUpdate(name, parseInt(value))}
            time={restTime.toString()}
          />
          <InputCard
            title="Intervals"
            name="intervals"
            updateTime={(name, value) => this.handleUpdate(name, parseInt(value))}
            time={intervals.toString()}
          />
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

export default App;
