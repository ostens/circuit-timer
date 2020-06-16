import React from "react";
import PropTypes from "prop-types";

import "./Button.css"

const Button = ({
  title,
  disabled = false,
  onClick = () => {}
}) => {
  return (
    <button
      className="button"
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  )
}

Button.propTypes = {
  title: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}

export default Button;