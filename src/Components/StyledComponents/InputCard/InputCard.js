import React from "react";
import PropTypes from "prop-types";

import InputBox from "../InputBox/InputBox";
import "./InputCard.scss"

const InputCard = ({
  title,
  updateTime,
  name,
  time
}) => {
  return (
    <div className="inputCard">
      <div className="title">{title}:</div>
      <InputBox
        time={time}
        name={name}
        updateTime={updateTime} />
    </div>
  )
}

InputCard.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  time: PropTypes.string,
  updateTime: PropTypes.func.isRequired
}

export default InputCard;