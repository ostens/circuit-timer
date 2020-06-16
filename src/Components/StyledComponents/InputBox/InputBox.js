import React from "react";
import PropTypes from "prop-types";

import "./InputBox.css"

const InputBox = ({
  name,
  time,
  updateTime
}) => {

  const handleChange = event => updateTime(event.target.name, event.target.value);

  return (
    <input
      className="input"
      name={name}
      type="number"
      value={time}
      min="1"
      max="30"
      maxLength={3}
      onChange={handleChange}
    />
  )
}

InputBox.propTypes = {
  name: PropTypes.string,
  time: PropTypes.string,
  updateTime: PropTypes.func.isRequired
}

export default InputBox;