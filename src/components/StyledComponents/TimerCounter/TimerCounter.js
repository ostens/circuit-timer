import React from "react";
import PropTypes from "prop-types";

import { convertTime } from "../../TimerPlayer/TimerPlayerUtils";
import "./TimerCounter.scss";
import ProgressBar from "../ProgressBar/ProgressBar";

const TimerCounter = ({
  seconds,
  totalSeconds
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
      <ProgressBar seconds={seconds} totalSeconds={totalSeconds} />
    </div>

  )
}

TimerCounter.propTypes = {
  seconds: PropTypes.number.isRequired,
  totalSeconds: PropTypes.number.isRequired
}

export default TimerCounter;
