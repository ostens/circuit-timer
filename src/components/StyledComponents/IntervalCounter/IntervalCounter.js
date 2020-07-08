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
  const svgLength = 280;
  const centrePosition = svgLength / 2;
  const strokeWidth = 5;
  const radius = (svgLength - 2 * strokeWidth) / 2;
  const circumference = Math.PI * 2 * radius;

  return (
    <svg
      className="intervalCircle"
      width={svgLength}
      height={svgLength}
    >
      <circle
        className="circle"
        cx={centrePosition}
        cy={centrePosition}
        r={radius}
      >
      </circle>
      <circle
        className="circleProgress"
        cx={centrePosition}
        cy={centrePosition}
        r={radius}
        transform="rotate(-90) scale(1, -1)"
        style={{
          transformOrigin: "center",
          strokeDasharray: circumference,
          strokeDashoffset: (circumference) - (circumference * seconds / 30)
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
