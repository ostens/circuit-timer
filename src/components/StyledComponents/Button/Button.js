import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./Button.scss"
import { path } from "../../../constants";

const Button = ({
  title,
  disabled = false,
  onClick = () => { }
}) => {
  return (
      <div className="buttonWrapper">
      <Link to={path.list}>
        <button
          className="button"
          disabled={disabled}
          onClick={onClick}
        >
          {title}
        </button>
        </Link>
      </div>
  )
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}

export default Button;
