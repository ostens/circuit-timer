import React from "react";

import Timer from "../Timer/Timer";
import Button from "../Button/Button";
import InputCard from "../InputCard/InputCard";
import InputBox from "../InputBox/InputBox";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTime: 20,
      restTime: 10,
      intervals: 5,
      totalTime: 300
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
    const { activeTime, restTime, intervals } = this.state;
    const newTotal = intervals * (activeTime + restTime);
    this.setState({
      totalTime: newTotal
    });
  }

  render() {
    const { totalTime, activeTime, restTime, intervals } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Circuit timer</h1>
          <InputCard 
            title="Active time"
          />
          <InputBox
            name="activeTime"
            updateTime={(name, value) => this.handleUpdate(name, parseInt(value))}
            time={activeTime.toString()}
          />
          <InputCard 
            title="Rest time"
          />
          <InputBox
            name="restTime"
            updateTime={(name, value) => this.handleUpdate(name, parseInt(value))}
            time={restTime.toString()}
          />
           <InputCard 
            title="Intervals"
          />
          <InputBox
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
