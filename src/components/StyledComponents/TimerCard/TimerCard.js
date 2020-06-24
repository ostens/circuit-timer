import React from "react";

import Weight from "../../Icons/weight.svg"

import "./TimerCard.scss";

const TimerCard = ({
  timer
}) => {
  const { timerName, activeTime, restTime, intervals } = timer;

  return (
    <div className="timerCard">
      <img
        className="image"
        src={Weight}
        alt="Hourglass"
      />
      <div className="content">
        <div className="title">{timerName}</div>
        <div className="text">
          <i
            className="arrow up"
          />
          {activeTime}s
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
