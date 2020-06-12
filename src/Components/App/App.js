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
    let { totalTime } = this.state;
    if (totalTime > 0) {
      this.setState({
        totalTime: totalTime - 1
      });
    }
  }

  handleUpdate(name, value) {
    this.setState({
      [name]: value
    });
    this.updateTotal();
  }

  updateTotal() {
    const { activeTime, restTime, intervals } = this.state;
    const newTotal = intervals * (activeTime + restTime);
    this.setState({
      totalTime: newTotal
    });
  }

  render() {
    const { totalTime, activeTime, restTime, intervals, active } = this.state;
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
          <Timer
            seconds={totalTime}
          />
          <Button
            disabled={active}
            onClick={() => this.handleClick()}
          />
        </header>
      </div>
    );
  }
}

export default App;
