import React from "react";
import PropTypes from "prop-types";

import "./Button.css"

const Button = ({
  disabled = false,
  onClick = () => {}
}) => {
  return (
    <button
      className="button"
      disabled={disabled}
      onClick={onClick}
    >
      Start
    </button>
  )
}

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}

export default Button;