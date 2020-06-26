import React from "react";
import PropTypes from "prop-types";

import { convertTime } from "./TimerCounterUtils";
import "./TimerCounter.scss";

const TimerCounter = ({
  seconds
}) => {
  const time = convertTime(seconds);
  return (
    <div
      className="timer"
    >
      {time}
    </div>
  )
}

TimerCounter.propTypes = {
  seconds: PropTypes.number.isRequired,
}

export default TimerCounter;
