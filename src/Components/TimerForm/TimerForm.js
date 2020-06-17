import React from "react";

import Button from "../StyledComponents/Button/Button";
import BackButton from "../StyledComponents/BackButton/BackButton";
import InputCard from "../StyledComponents/InputCard/InputCard";
import "./TimerForm.css";

class TimerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTime: 20,
      restTime: 10,
      intervals: 5,
      totalTime: 300
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
    const totalTime = intervals * (activeTime + restTime);
    this.setState({
      totalTime: totalTime
    });
  }

  render() {
    const { activeTime, restTime, intervals } = this.state;
    return (
      <div className="App">
          <div className="backButtonWrapper">
            <BackButton url={"/timers"} />
          </div>
          <div>Add a new timer</div>
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
              title="Save"
              disabled={false}
              onClick={() => { }}
            />
          </div>
      </div>
    );
  }
}

export default TimerForm;
