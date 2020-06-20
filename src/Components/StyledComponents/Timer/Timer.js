import React from "react";
import PropTypes from "prop-types";

import { convertTime } from "./TimerUtils";
import "./Timer.scss";

const Timer = ({
  seconds
}) => {
  const time = convertTime(seconds);
  return (
    <div
      className="timer"
    >
      {time}
    </div>
  )
}

Timer.propTypes = {
  seconds: PropTypes.number.isRequired,
}

export default Timer;