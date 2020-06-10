import React from "react";

import Timer from "../Timer/Timer";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 60
    }
  }

  handleClick() {
    const { time } = this.state;
    this.setState({
      time: time - 1
    });
  }

  handleUpdate(input) {
    this.setState({
      time: input
    });
  }

  render() {
    const { time } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Circuit timer</h1>
          <h3>Active time:</h3>
          <Input
            updateTime={(input) => this.handleUpdate(parseInt(input))}
            time={time.toString()}
          />
          <h3>Rest time:</h3>
          <Input
            updateTime={(input) => this.handleUpdate(parseInt(input))}
            time={time.toString()}
          />
          <Timer
            seconds={time}
          />
          <Button onClick={() => this.handleClick()} />
        </header>
      </div>
    );
  }


}

export default App;
