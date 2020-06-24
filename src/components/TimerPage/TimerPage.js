import React, { useState, useEffect } from "react";

import PlayPauseButton from "../StyledComponents/PlayPauseButton/PlayPauseButton";
import IntervalTimer from "../StyledComponents/IntervalTimer/IntervalTimer";
import Timer from "../StyledComponents/Timer/Timer";
import { calculateTotal } from "../StyledComponents/Timer/TimerUtils"
import "./TimerPage.scss";

const TimerPage = ({
  intervals = "",
  activeTime = "",
  restTime = "",
}) => {
  const [remainingTime, setRemainingTime] = useState(calculateTotal(activeTime, restTime, intervals));
  const [isActive, setIsActive] = useState(false);

  const totalTime = calculateTotal(activeTime, restTime, intervals);
  const intervalTime = activeTime + restTime;
  const remainingIntervalTime = remainingTime % intervalTime || intervalTime;
  const currentInterval = Math.floor((totalTime - remainingTime) / intervalTime) + 1;

  const toggle = () => {
    setIsActive(!isActive);
  }

  const reset = () => {
    setRemainingTime(totalTime);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setRemainingTime(remainingTime => remainingTime - 1);
      }, 1000);
    } else if (!isActive && remainingTime !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, remainingTime]);

  return (
    <>
      <IntervalTimer
        currentInterval={currentInterval}
        intervals={intervals}
        state={remainingIntervalTime > restTime ? "Active" : "Rest"}
        seconds={remainingIntervalTime}
      />
      <Timer
        seconds={remainingTime}
      />
        Remaining
      <div className="controlBar">
        <button className="textButton">
          Delete
        </button>
        <button
          className="textButton"
          onClick={reset}
        >
          Reset
        </button>
        <PlayPauseButton
          action={isActive ? "Pause" : "Play"}
          onClick={toggle}
        />
      </div>
    </>
  );  
}

export default TimerPage;
