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
    <svg
      className="intervalCircle"
      width="300"
      height="300"
    >
      <circle
        className="circle"
        cx="150"
        cy="150"
        r="140"></circle>
      <circle
        className="circleProgress"
        cx="150"
        cy="150"
        r="140"
        transform="rotate(-90 150 150)"
        style={{
          strokeDasharray: Math.PI * 280,
          strokeDashoffset: (Math.PI * 280) - (3.14 * 280) * seconds / 30
        }}
      >
      </circle>
      <text
        className="text"
        textAnchor="middle"
        dominantBaseline="middle"
        x="50%"
        y="20%">{state}</text>
      <text
        className="largeText"
        textAnchor="middle"
        dominantBaseline="middle"
        x="50%"
        y="50%"
      >{time}
      </text>
      <text
        className="text"
        textAnchor="middle"
        dominantBaseline="middle"
        x="50%"
        y="80%"
      >Interval {`${currentInterval}/${intervals}`}
      </text>
    </svg>
  )
}

IntervalCounter.propTypes = {
  currentInterval: PropTypes.number.isRequired,
  intervals: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
  state: PropTypes.string.isRequired
}

export default IntervalCounter;
