import React from "react";
import PropTypes from "prop-types";

import "./ProgressBar.scss";

const ProgressBar = ({
  seconds = 300,
  totalSeconds = 300
}) => {
  const percentage = seconds * 100 / totalSeconds;

  return (
    <div className="progressBar">
      <div className="percentage" style={{ width: `${percentage}%` }} />
    </div>
  )
}

ProgressBar.propTypes = {
  seconds: PropTypes.number,
  totalSeconds: PropTypes.number,
};

export default ProgressBar;
