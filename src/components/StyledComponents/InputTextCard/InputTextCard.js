import React from "react";
import PropTypes from "prop-types";

import "./InputTextCard.scss"

const InputTextCard = ({
  name = "",
  title,
  onChange = () => { },
}) => {
  return (
    <div className="inputCard">
      <div className="title">{title}:</div>
      <input
        className="input"
        name={name}
        type="string"
        onChange={onChange}
      />
    </div>
  )
}

InputTextCard.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  onChange: PropTypes.func,
}

export default InputTextCard;