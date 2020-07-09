import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import PlayPauseButton from "../StyledComponents/PlayPauseButton/PlayPauseButton";
import IntervalCounter from "../StyledComponents/IntervalCounter/IntervalCounter";
import TimerCounter from "../StyledComponents/TimerCounter/TimerCounter";
import { calculateTotal } from "../StyledComponents/TimerCounter/TimerCounterUtils"
import "./TimerPage.scss";

const TimerPage = ({ timer }) => {

  const { intervals, activeTime, restTime } = timer;
  const [remainingTime, setRemainingTime] = useState(calculateTotal(activeTime, restTime, intervals));
  const [isActive, setIsActive] = useState(false);

  const totalTime = calculateTotal(activeTime, restTime, intervals);
  const intervalTime = activeTime + restTime;
  const remainingIntervalTime = remainingTime % intervalTime || (remainingTime === 0 ? 0 : intervalTime);
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
    if (isActive && remainingTime !== 0) {
      interval = setInterval(() => {
        setRemainingTime(remainingTime => remainingTime - 1);
      }, 1000);
    } else if (!isActive && remainingTime !== 0) {
      clearInterval(interval);
    } else if (isActive && remainingTime === 0) {
      clearInterval(interval);
      setIsActive(false);

    }
    return () => clearInterval(interval);
  }, [isActive, remainingTime]);

  return (
    <>
      <IntervalCounter
        currentInterval={currentInterval}
        intervals={intervals}
        state={remainingIntervalTime > restTime ? "Active" : "Rest"}
        intervalLength={intervalTime}
        seconds={remainingIntervalTime}
      />
      <TimerCounter
        seconds={remainingTime}
        totalSeconds={totalTime}
      />
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

TimerPage.propTypes = {
  timer: PropTypes.object.isRequired,
}

export default TimerPage;
