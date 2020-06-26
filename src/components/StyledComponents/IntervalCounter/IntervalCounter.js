import React from "react";
import PropTypes from "prop-types";

import { convertTime } from "../TimerCounter/TimerCounterUtils";
import "./IntervalCounter.scss";

const IntervalCounter = ({
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

IntervalCounter.propTypes = {
  currentInterval: PropTypes.number.isRequired,
  intervals: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
  state: PropTypes.string.isRequired
}

export default IntervalCounter;
