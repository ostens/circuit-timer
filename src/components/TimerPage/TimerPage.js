import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import PlayPauseButton from "../StyledComponents/PlayPauseButton/PlayPauseButton";
import IntervalCounter from "../StyledComponents/IntervalCounter/IntervalCounter";
import TimerCounter from "../StyledComponents/TimerCounter/TimerCounter";
import { calculateTotal } from "../StyledComponents/TimerCounter/TimerCounterUtils"
import { ACTIVE, REST, PLAYING, PAUSED, FINISHED } from "../../constants";
import "./TimerPage.scss";

const TimerPage = ({ timer }) => {

  const { intervals, activeTime, restTime } = timer;
  const [remainingTime, setRemainingTime] = useState(calculateTotal(activeTime, restTime, intervals));
  const [playingState, setPlayingState] = useState(PAUSED);

  const totalTime = calculateTotal(activeTime, restTime, intervals);
  const intervalTime = activeTime + restTime;
  const remainingIntervalTime = remainingTime % intervalTime || (remainingTime === 0 ? 0 : intervalTime);
  const currentInterval = Math.floor((totalTime - remainingTime) / intervalTime) + 1;

  const toggle = () => {
    if (playingState === PLAYING) {
      setPlayingState(PAUSED)
    } else if (playingState === PAUSED) {
      setPlayingState(PLAYING)
    } else if (playingState === FINISHED) {
      reset();
    }
  }

  const reset = () => {
    setRemainingTime(totalTime);
    setPlayingState(PAUSED);
  }

  const calculateAction = () => {
    if (playingState === PLAYING) {
      return "Pause";
    } else if (playingState === PAUSED) {
      return "Play";
    } else if (playingState === FINISHED) {
      return "Stop";
    }
  }

  console.log(playingState);
  useEffect(() => {
    let interval = null;
    if (playingState === PLAYING && remainingTime !== 0) {
      interval = setInterval(() => {
        setRemainingTime(remainingTime => remainingTime - 1);
      }, 1000);
    } else if (playingState === PAUSED && remainingTime !== 0) {
      clearInterval(interval);
    } else if (playingState === PLAYING && remainingTime === 0) {
      clearInterval(interval);
      setPlayingState(FINISHED);

    }
    return () => clearInterval(interval);
  }, [playingState, remainingTime]);

  return (
    <>
      <IntervalCounter
        currentInterval={currentInterval}
        intervals={intervals}
        state={remainingIntervalTime > restTime ? ACTIVE : REST}
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
          action={calculateAction()}
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
