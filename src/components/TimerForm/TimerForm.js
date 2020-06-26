import React, { useState } from "react";
import PropTypes from "prop-types";

import Button from "../StyledComponents/Button/Button";
import InputTextCard from "../StyledComponents/InputTextCard/InputTextCard";
import InputNumberCard from "../StyledComponents/InputNumberCard/InputNumberCard";

const TimerForm = ({ submitTimer }) => {
  const [timerName, setTimerName] = useState("");
  const [activeTime, setActiveTime] = useState(20);
  const [restTime, setRestTime] = useState(10);
  const [intervals, setIntervals] = useState(10);

  const handleSubmitTimer = () => {
    submitTimer(timerName, activeTime, restTime, intervals);
  };

  const TIME_INCREMENTS = [-5, 5];
  const INTERVAL_INCREMENTS = [-1, 1];

  return (
    <>
      <InputTextCard
        title="Timer name"
        name="timerName"
        onChange={e => setTimerName(e.target.value)}
      />
      <InputNumberCard
        title="Active time"
        value={activeTime}
        increments={TIME_INCREMENTS}
        onClick={(e) => setActiveTime(activeTime + parseInt(e.currentTarget.id))}
      />
      <InputNumberCard
        title="Rest time"
        value={restTime}
        increments={TIME_INCREMENTS}
        onClick={(e) => setRestTime(restTime + parseInt(e.currentTarget.id))}
      />
      <InputNumberCard
        title="Intervals"
        value={intervals}
        increments={INTERVAL_INCREMENTS}
        onClick={(e) => setIntervals(intervals + parseInt(e.currentTarget.id))}
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
