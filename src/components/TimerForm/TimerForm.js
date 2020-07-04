import React, { useState } from "react";
import PropTypes from "prop-types";

import Button from "../StyledComponents/Button/Button";
import InputTextCard from "../StyledComponents/InputTextCard/InputTextCard";
import InputNumberCard from "../StyledComponents/InputNumberCard/InputNumberCard";

const TimerForm = ({ submitTimer }) => {
  const [timerName, setTimerName] = useState("");
  const [activeTime, setActiveTime] = useState(30);
  const [restTime, setRestTime] = useState(30);
  const [intervals, setIntervals] = useState(10);

  const handleSubmitTimer = () => {
    submitTimer(timerName, activeTime, restTime, intervals);
  };

  return (
    <>
      <InputTextCard
        placeholder="Title your timer"
        name="timerName"
        onChange={e => setTimerName(e.target.value)}
      />
      <InputNumberCard
        title="Active time"
        value={activeTime}
        min={5}
        max={60}
        step={5}
        onChange={(e) => setActiveTime(parseInt(e.target.value))}
      />
      <InputNumberCard
        title="Rest time"
        value={restTime}
        min={5}
        max={60}
        step={5}
        onChange={(e) => setRestTime(parseInt(e.target.value))}
      />
      <InputNumberCard
        title="Intervals"
        value={intervals}
        min={5}
        max={20}
        step={1}
        onChange={(e) => setIntervals(e.target.value)}
      /> 
      <Button
        title="SAVE"
        disabled={!timerName}
        onClick={handleSubmitTimer}
      />
    </>
  );
}

TimerForm.propTypes = {
  submitTimer: PropTypes.func.isRequired
};

export default TimerForm;
