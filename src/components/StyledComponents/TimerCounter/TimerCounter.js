import React from "react";
import PropTypes from "prop-types";

import { convertTime } from "./TimerCounterUtils";
import "./TimerCounter.scss";
import ProgressBar from "../ProgressBar/ProgressBar";

const TimerCounter = ({
  seconds
}) => {
  const time = convertTime(seconds);
  return (
    <div className="totalTime">
      <div
        className="timer"
      >
        {time}
      </div>
    Remaining
      <ProgressBar seconds={seconds} totalSeconds={300} />
    </div>

  )
}

TimerCounter.propTypes = {
  seconds: PropTypes.number.isRequired,
}

export default TimerCounter;
