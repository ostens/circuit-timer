import React from "react";

import { calculateTotal, convertTime } from "../Timer/TimerUtils"
import "./TimerCard.scss";

const TimerCard = ({
  timer
}) => {
  const { timerName, activeTime, restTime, intervals } = timer;
  const totalTime = convertTime(calculateTotal(activeTime, restTime, intervals));

  return (
    <div className="timerCard">
      <div className="total">
        {totalTime}
      </div>
      <div className="content">
        <div className="title">{timerName}</div>
        <div className="text">
          <i
            className="arrow up"
          />
          {activeTime}s
          <i className="dividor">•</i>
          <i
            className="arrow down"
          />
          {restTime}s
      </div>
        <div className="text">{intervals} intervals </div>
      </div>
    </div>
  )
}

export default TimerCard;
