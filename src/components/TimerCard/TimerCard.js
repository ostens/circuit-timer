import React from "react";
import "./TimerCard.scss";

const TimerCard = ({
  timer
}) => {
  const { activeTime, restTime, intervals } = timer;

  return (
    <div className="timerCard">
      <div>Active time: {activeTime}s</div>
      <div>Rest time: {restTime}s</div>
      <div>Intervals: {intervals}s</div>
    </div>
  )
}

export default TimerCard;
