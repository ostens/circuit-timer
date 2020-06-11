import React from "react";

import Timer from "../Timer/Timer";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTime: 35,
      restTime: 15,
      intervals: 2,
      totalTime: 100
    }
  }

  handleClick() {
    const { totalTime } = this.state;
    this.setState({
      totalTime: totalTime - 1
    });
  }

  handleUpdate(name, value) {
    this.setState({
      [name]: value
    });
    const { activeTime, restTime } = this.state;
    this.setState({
      totalTime: activeTime + restTime
    });
  }

  render() {
    const { totalTime, activeTime, restTime, intervals } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Circuit timer</h1>
          <h3>Active time:</h3>
          <Input
            name="activeTime"
            updateTime={(name, value) => this.handleUpdate(name, parseInt(value))}
            time={activeTime.toString()}
          />
          <h3>Rest time:</h3>
          <Input
            name="restTime"
            updateTime={(name, value) => this.handleUpdate(name, parseInt(value))}
            time={restTime.toString()}
          />
          <h3>Intervals:</h3>
          <Input
            name="intervals"
            updateTime={(name, value) => this.handleUpdate(name, parseInt(value))}
            time={intervals.toString()}
          />
          <Timer
            seconds={totalTime}
          />
          <Button onClick={() => this.handleClick()} />
        </header>
      </div>
    );
  }


}

export default App;
