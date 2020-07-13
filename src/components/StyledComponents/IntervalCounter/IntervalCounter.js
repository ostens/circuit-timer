import React from "react";
import PropTypes from "prop-types";

import "./IntervalCounter.scss";

const IntervalCounter = ({
  currentInterval,
  intervals
}) => {
  const intervalProgress = Array(intervals).fill(false).fill(true, 0, currentInterval);

  return (
    <div className="intervalCounter">
      {intervalProgress.map((isComplete, index) =>
        <span
          className={`intervalDot ${isComplete ? "filled" : "empty"}`}
          key={index}
        />
      )}
    </div>
  )
}

IntervalCounter.propTypes = {
  currentInterval: PropTypes.number.isRequired,
  intervals: PropTypes.number.isRequired
}

export default IntervalCounter;
