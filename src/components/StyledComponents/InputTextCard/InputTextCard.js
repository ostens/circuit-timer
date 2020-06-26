import React from "react";
import PropTypes from "prop-types";

import "./InputTextCard.scss"

const InputTextCard = ({
  name = "",
  placeholder,
  onChange = () => { },
}) => {
  return (
    <div className="inputTextCard">
      <input
        className="input"
        name={name}
        type="string"
        placeholder={placeholder}
        autoComplete="off"
        onChange={onChange}
      />
    </div>
  )
}

InputTextCard.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default InputTextCard;
