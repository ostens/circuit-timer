import React from "react";
import PropTypes from "prop-types";

import "./Input.css"

const Input = ({
  time,
  updateTime
}) => {

  const handleChange = event => updateTime(event.target.value);

  return (
    <input
      className="input"
      name="Time Input"
      type="number"
      value={time}
      min="10"
      max="100"
      maxLength={3}
      onChange={handleChange}
    />
  )
}

Input.propTypes = {
  time: PropTypes.string,
  updateTime: PropTypes.func.isRequired
}

export default Input;