import React from "react";
import PropTypes from "prop-types";

import "./Button.css"

const Button = ({
  onClick
}) => {
  return (
    <button
      className="button"
      onClick={() => { onClick() }}
    >
      Start
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Button;