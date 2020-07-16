import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import PlayControlButton from "../StyledComponents/PlayControlButton/PlayControlButton";
import IntervalClock from "../StyledComponents/IntervalClock/IntervalClock";
import IntervalCounter from "../StyledComponents/IntervalCounter/IntervalCounter";
import AudioButton from "../StyledComponents/AudioButton/AudioButton";
import { calculateTotalTime } from "./TimerPlayerUtils"
import ShortBeep from "../Sounds/short-beep.mp3";
import LongBeep from "../Sounds/long-beep.mp3";
import { ACTIVE, REST, PLAYING, PAUSED, FINISHED, PLAY, PAUSE, RESTART, path } from "../../constants";
import "./TimerPlayer.scss";

const TimerPlayer = ({ id, timer, deleteTimer }) => {
  const { intervals, activeTime, restTime } = timer;
  const index = parseInt(id);
  const LongBeepSound = new Audio(ShortBeep);
  const ShortBeepSound = new Audio(LongBeep);

  const [remainingTime, setRemainingTime] = useState(calculateTotalTime(activeTime, restTime, intervals));
  const [countdownState, setCountdownState] = useState(PAUSED);
  const [soundOn, setSoundOn] = useState(false);

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

  const handleDeleteTimer = () => {
    deleteTimer(index);
  }

  const toggleSound = () => {
    setSoundOn(!soundOn);
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
      if (soundOn) {
        if (remainingIntervalTime === restTime) {
          ShortBeepSound.play();
        } else if (remainingIntervalTime === intervalTime) {
          LongBeepSound.play();
        }
      }
    } else if (countdownState === PAUSED) {
      clearInterval(interval);
    } else if (countdownState === PLAYING && remainingTime === 0) {
      if (soundOn) {
        LongBeepSound.play();
      }
      clearInterval(interval);
      setCountdownState(FINISHED);

    }
    return () => clearInterval(interval);
  }, [countdownState, remainingTime, LongBeepSound, ShortBeepSound, remainingIntervalTime, intervalTime, restTime, soundOn]);

  return (
    <>
      <AudioButton
        onClick={toggleSound}
        disabled={!soundOn} />
      <div className="clockWrapper">
        <IntervalClock
          intervalState={remainingIntervalTime > restTime ? ACTIVE : REST}
          intervalTime={intervalTime}
          remainingIntervalTime={remainingIntervalTime}
          remainingTime={remainingTime}
          totalTime={totalTime}
          countdownState={countdownState}
        />
        <IntervalCounter
          intervals={intervals}
          currentInterval={currentInterval}
        />
      </div>
      <div className="controlBar">
        <Link to={path.list}>
          <button
            className="textButton"
            onClick={handleDeleteTimer}
          >
            Delete
        </button>
        </Link>
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
  deleteTimer: PropTypes.func.isRequired,
}

export default TimerPlayer;
