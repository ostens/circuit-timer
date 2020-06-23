import React from "react";
import PropTypes from "prop-types";

import "./Button.scss"
import { Link } from "react-router-dom";

const Button = ({
  title,
  onClick = () => { }
}) => {
  return (
      <div className="buttonWrapper">
      <Link to="/timers/1">
        <button
          className="button"
          onClick={onClick}
        >
          {title}
        </button>
        </Link>
      </div>
  )
}

Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func
}

export default Button;