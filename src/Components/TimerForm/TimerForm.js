import React from "react";

import NavBar from "../NavBar/NavBar";
import Button from "../StyledComponents/Button/Button";
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
      <>
        <NavBar title="Add a new timer" />
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
        <Button
          title="Save"
          disabled={false}
          onClick={() => { }}
          url="/timers/1"
        />
      </>
    );
  }
}

export default TimerForm;
