import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import PlayControlButton from "../StyledComponents/PlayControlButton/PlayControlButton";
import IntervalClock from "../StyledComponents/IntervalClock/IntervalClock";
import IntervalCounter from "../StyledComponents/IntervalCounter/IntervalCounter";
import { calculateTotalTime } from "./TimerPlayerUtils"
import { ACTIVE, REST, PLAYING, PAUSED, FINISHED, PLAY, PAUSE, RESTART } from "../../constants";
import "./TimerPlayer.scss";

const TimerPlayer = ({ timer }) => {
  const { intervals, activeTime, restTime } = timer;

  const [remainingTime, setRemainingTime] = useState(calculateTotalTime(activeTime, restTime, intervals));
  const [countdownState, setCountdownState] = useState(PAUSED);

  const totalTime = calculateTotalTime(activeTime, restTime, intervals);
  const intervalTime = activeTime + restTime;
  const remainingIntervalTime = remainingTime % intervalTime || (remainingTime === 0 ? 0 : intervalTime);
  const currentInterval = Math.floor((totalTime - remainingTime) / intervalTime) + 1;

  const toggleCountdownState = () => {
    if (countdownState === PLAYING) {
      setCountdownState(PAUSED)
    } else if (countdownState === PAUSED) {
      setCountdownState(PLAYING)
    } else if (countdownState === FINISHED) {
      reset();
    }
  }

  const reset = () => {
    setRemainingTime(totalTime);
    setCountdownState(PAUSED);
  }

  const countdownAction = () => {
    if (countdownState === PLAYING) {
      return PAUSE;
    } else if (countdownState === PAUSED) {
      return PLAY;
    } else if (countdownState === FINISHED) {
      return RESTART;
    }
  }

  useEffect(() => {
    let interval = null;
    if (countdownState === PLAYING && remainingTime !== 0) {
      interval = setInterval(() => {
        setRemainingTime(remainingTime => remainingTime - 1);
      }, 1000);
    } else if (countdownState === PAUSED) {
      clearInterval(interval);
    } else if (countdownState === PLAYING && remainingTime === 0) {
      clearInterval(interval);
      setCountdownState(FINISHED);

    }
    return () => clearInterval(interval);
  }, [countdownState, remainingTime]);

  return (
    <>
      <IntervalClock
        intervalState={remainingIntervalTime > restTime ? ACTIVE : REST}
        intervalTime={intervalTime}
        remainingIntervalTime={remainingIntervalTime}
        remainingTime={remainingTime}
        totalTime={totalTime}
      />
      <IntervalCounter
        intervals={intervals}
        currentInterval={currentInterval}
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
        <PlayControlButton
          action={countdownAction()}
          onClick={toggleCountdownState}
        />
      </div>
    </>
  );
}

TimerPlayer.propTypes = {
  timer: PropTypes.object.isRequired,
}

export default TimerPlayer;
