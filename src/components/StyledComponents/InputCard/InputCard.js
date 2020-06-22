import React from "react";
import PropTypes from "prop-types";

import "./InputCard.scss"

const InputCard = ({
  name = "",
  title,
  type = "number",
  onChange = () => { },
}) => {
  return (
    <div className="inputCard">
      <div className="title">{title}:</div>
      <input
        className="input"
        name={name}
        type={type}
        onChange={onChange}
      />
    </div>
  )
}

InputCard.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
}

export default InputCard;