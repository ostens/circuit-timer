import React from "react";
import PropTypes from "prop-types";

import "./Timer.css";

const Timer = ({
  seconds
}) => {
  return (
    <div>
      <h2
        className="timer">
        Time Remaining: {seconds}s
      </h2>
    </div>
  )
}

Timer.propTypes = {
  seconds: PropTypes.number.isRequired,
}

export default Timer;