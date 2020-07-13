import React from "react";
import PropTypes from "prop-types";

import { ACTIVE, REST, PAUSED, FINISHED } from "../../../constants";
import { convertTime } from "../../TimerPlayer/TimerPlayerUtils";
import "./IntervalClock.scss";

const IntervalClock = ({
  remainingIntervalTime,
  intervalState,
  intervalTime,
  remainingTime,
  totalTime,
  countdownState
}) => {

  const svgLength = 250;
  const centrePosition = svgLength / 2;
  const strokeWidth = 5;
  const radius = (svgLength - 2 * strokeWidth) / 2;
  const circumference = Math.PI * 2 * radius;

  return (
    <svg
      className="intervalClock"
      width={svgLength}
      height={svgLength}
    >
      <circle
        className={`backgroundCircle ${countdownState === FINISHED ? "flashCircle" : ""}`}
        cx={centrePosition}
        cy={centrePosition}
        r={radius}
      >
      </circle>
      <circle
        className="progressArc"
        cx={centrePosition}
        cy={centrePosition}
        r={radius}
        transform="rotate(-90) scale(1, -1)"
        style={{
          transformOrigin: "center",
          strokeDasharray: circumference,
          strokeDashoffset: (circumference) - (circumference * remainingIntervalTime / intervalTime)
        }}
      >
      </circle>
      <text
        className="smallClockText"
        textAnchor="middle"
        dominantBaseline="middle"
        x="50%"
        y="20%">{intervalState}</text>
      <text
        className={`largeClockText ${intervalState === ACTIVE ? ACTIVE : REST} ${(countdownState === PAUSED && remainingTime !== totalTime) ? "flash" : ""}`}
        textAnchor="middle"
        dominantBaseline="middle"
        x="50%"
        y="50%"
      >{convertTime(remainingIntervalTime)}
      </text>
      <text
        className="smallClockText"
        textAnchor="middle"
        dominantBaseline="middle"
        x="50%"
        y="80%"
      >{`${convertTime(remainingTime)} / ${convertTime(totalTime)}`}
      </text>
    </svg>
  )
}

IntervalClock.propTypes = {
  remainingIntervalTime: PropTypes.number.isRequired,
  intervalState: PropTypes.string.isRequired,
  intervalTime: PropTypes.number.isRequired,
  remainingTime: PropTypes.number.isRequired,
  totalTime: PropTypes.number.isRequired,
  countdownState: PropTypes.string.isRequired
}

export default IntervalClock;
