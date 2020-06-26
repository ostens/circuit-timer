import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./Button.scss"
import { path } from "../../../constants";

const Button = ({
  title,
  onClick = () => { }
}) => {
  return (
      <div className="buttonWrapper">
      <Link to={path.list}>
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
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button;