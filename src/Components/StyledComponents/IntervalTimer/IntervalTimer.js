import React from "react";
import PropTypes from "prop-types";

import { convertTime } from "../Timer/TimerUtils";
import "./IntervalTimer.css";

const IntervalTimer = ({
  currentInterval,
  intervals,
  seconds,
  state
}) => {
  const time = convertTime(seconds);
  return (
    <div className="circle">
      <div className="text">
        {state}
      </div>
      <div className={`largeTimer ${state === "Active" ? "active" : "rest"}`}>
        {time}
      </div>
      <div className="text">Interval {`${currentInterval}/${intervals}`}</div>
    </div>

  )
}

IntervalTimer.propTypes = {
  seconds: PropTypes.number.isRequired,
  state: PropTypes.string.isRequired
}

export default IntervalTimer;
