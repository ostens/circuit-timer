import React from "react";
import PropTypes from "prop-types";

import "./TimerBar.scss";
import IntervalBar from "../IntervalBar/IntervalBar";

const TimerBar = ({
  activeTime = 30,
  restTime = 30,
  intervals = 5
}) => {

  return (
    <div className="timerBar">
      {[...Array(intervals)].map((e, i) => {
        return ( 
        <IntervalBar
          key={i}
          intervals={intervals}
          activeTime={activeTime}
          restTime={restTime} />
        )
      })}
      
    </div>
  )
}

TimerBar.propTypes = {
  activeTime: PropTypes.number,
  restTime: PropTypes.number,
  intervals: PropTypes.number
};

export default TimerBar;
