import React from "react";
import PropTypes from "prop-types";

import InputBox from "../InputBox/InputBox";
import "./InputCard.css"

const InputCard = ({
  title,
  updateTime,
  name,
  time
}) => {
  return (
    <>
    <h3>{title}:</h3>
    <InputBox 
      time={time}
      name={name}
      updateTime={updateTime}/>
    </>
  )
}

InputCard.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  time: PropTypes.string,
  updateTime: PropTypes.func.isRequired
}

export default InputCard;