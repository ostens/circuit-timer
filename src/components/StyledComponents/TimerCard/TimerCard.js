import React from "react";
import "./TimerCard.scss";

const TimerCard = ({
  timer
}) => {
  const { activeTime, restTime, intervals } = timer;

  return (
    <div className="timerCard">
      <div className="text">Active time: {activeTime}s</div>
      <div className="text">Rest time: {restTime}s</div>
      <div className="text">Intervals: {intervals}</div>
    </div>
  )
}

export default TimerCard;
