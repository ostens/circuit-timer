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
      timeRemaining: 300,
      active: false
    }
    this.countDown = this.countDown.bind(this);
  }

  handleClick() {
    setInterval(this.countDown, 1000);
    this.setState({
      active: true
    })
  }

  countDown() {
    let { timeRemaining, active } = this.state;
    if (timeRemaining > 0 && active) {
      this.setState({
        timeRemaining: timeRemaining - 1
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
    let { active } = this.state;
    this.setState({
      active: !active
    })
  }

  handleReset() {
    let { totalTime } = this.state;
    this.setState({
      active: false,
      timeRemaining: totalTime
    })
  }

  updateTotal() {
    const { activeTime, restTime, intervals } = this.state;
    const newTotal = intervals * (activeTime + restTime);
    this.setState({
      totalTime: newTotal
    });
  }

  render() {
    const { timeRemaining, activeTime, restTime, intervals, active } = this.state;
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
              title="Start"
              disabled={active}
              onClick={() => this.handleClick()}
            />
            <Button
              title={active ? "Pause" : "Play"}
              disabled={false}
              onClick={() => this.handlePause()}
            />
            <Button
              title={"Reset"}
              disabled={false}
              onClick={() => this.handleReset()}
            />
          </div>
          <Timer
            seconds={timeRemaining}
          />
        </header>
      </div>
    );
  }
}

export default App;
