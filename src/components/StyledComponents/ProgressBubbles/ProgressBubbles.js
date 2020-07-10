import React from "react";
import PropTypes from "prop-types";

import "./ProgressBubbles.scss";

const ProgressBubbles = ({
  currentInterval,
  intervals
}) => {
  const intervalStates = Array(intervals).fill(false).fill(true, 0, currentInterval);

  return (
    <div className="bubbles">
      {intervalStates.map((isComplete, index) =>
        <span
          className={`bubble ${isComplete ? "filled" : "empty"}`}
          key={index}
        />
      )}
    </div>
  )
}

ProgressBubbles.propTypes = {
  currentInterval: PropTypes.number.isRequired,
  intervals: PropTypes.number.isRequired
}

export default ProgressBubbles;
