import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

import PlayPauseButton from "../StyledComponents/PlayPauseButton/PlayPauseButton";
import IntervalCounter from "../StyledComponents/IntervalCounter/IntervalCounter";
import TimerCounter from "../StyledComponents/TimerCounter/TimerCounter";
import { calculateTotal } from "../StyledComponents/TimerCounter/TimerCounterUtils"
import "./TimerPage.scss";

const TimerPage = ({ timer, fetchTimer }) => {
  const { id: idString } = useParams();
  const id = parseInt(idString, 10);

  useEffect(() => {
    fetchTimer(id);
  }, [fetchTimer, id]);

  const { intervals, activeTime, restTime } = timer;
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
      <IntervalCounter
        currentInterval={currentInterval}
        intervals={intervals}
        state={remainingIntervalTime > restTime ? "Active" : "Rest"}
        seconds={remainingIntervalTime}
      />
      <TimerCounter
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

TimerPage.propTypes = {
  timer: PropTypes.object.isRequired,
  fetchTimer: PropTypes.func.isRequired
}

export default TimerPage;
