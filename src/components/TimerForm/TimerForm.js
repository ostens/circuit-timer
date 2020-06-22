import React, { useState } from "react";
import PropTypes from "prop-types";

import NavBar from "../NavBar/NavBar";
import Button from "../StyledComponents/Button/Button";
import InputCard from "../StyledComponents/InputCard/InputCard";

const TimerForm = ({ submitTimer }) => {
  const [activeTime, setActiveTime] = useState("");
  const [restTime, setRestTime] = useState("");
  const [intervals, setIntervals] = useState("");

  const handleSubmitTimer = () => {
    submitTimer(activeTime, restTime, intervals);
  };

  return (
    <>
      <NavBar title="Add a new timer" />
      <InputCard
        title="Active time"
        name="activeTime"
        onChange={e => setActiveTime(e.target.value)}
      />
      <InputCard
        title="Rest time"
        name="restTime"
        onChange={e => setRestTime(e.target.value)}
      />
      <InputCard
        title="Intervals"
        name="intervals"
        onChange={e => setIntervals(e.target.value)}
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
