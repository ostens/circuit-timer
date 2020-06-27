import React from "react";
import PropTypes from "prop-types";

import "./InputNumberCard.scss"

const InputNumberCard = ({
  title,
  onChange = () => { },
  value,
  min,
  max,
  step
}) => {
  return (
    <div className="inputNumberCard">
      <div className="inputTitle">{title}</div>
      <div className="inputValue">{`${value}${title === "Intervals" ? "" : "s"}`}</div>
      <input
        className="slider"
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={onChange}>
      </input>
    </div>
  )
}

InputNumberCard.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired
}

export default InputNumberCard;
