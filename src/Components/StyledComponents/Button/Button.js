import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./Button.css"

const Button = ({
  url = null,
  title,
  disabled = false,
  onClick = () => { }
}) => {
  return (
    <Link to={url || "#"}>
      <button
        className="button"
        disabled={disabled}
        onClick={onClick}
      >
        {title}
      </button>
    </Link>
  )
}

Button.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}

export default Button;