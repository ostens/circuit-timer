import React, { useState } from "react";
import PropTypes from "prop-types";

import Button from "../StyledComponents/Button/Button";
import InputCard from "../StyledComponents/InputCard/InputCard";

const TimerForm = ({ submitTimer }) => {
  const [timerName, setTimerName] = useState("");
  const [activeTime, setActiveTime] = useState(20);
  const [restTime, setRestTime] = useState(10);
  const [intervals, setIntervals] = useState(10);

  const handleSubmitTimer = () => {
    submitTimer(timerName, activeTime, restTime, intervals);
  };

  return (
    <>
      <InputCard
        title="Timer name"
        name="timerName"
        type="string"
        onChange={e => setTimerName(e.target.value)}
      />
      <InputCard
        title="Active time"
        name="activeTime"
        onChange={e => setActiveTime(parseInt(e.target.value))}
      />
      <InputCard
        title="Rest time"
        name="restTime"
        onChange={e => setRestTime(parseInt(e.target.value))}
      />
      <InputCard
        title="Intervals"
        name="intervals"
        onChange={e => setIntervals(parseInt(e.target.value))}
      />
      <Button
        title="Save"
        onClick={handleSubmitTimer}
      />
    </>
  );
}

TimerForm.propTypes = {
  submitTimer: PropTypes.func.isRequired
};

export default TimerForm;
