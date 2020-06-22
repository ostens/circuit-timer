import React from "react";
import PropTypes from "prop-types";

import "./Button.scss"

const Button = ({
  title,
  onClick = () => { }
}) => {
  return (
    <div className="buttonWrapper">
      <button
        className="button"
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  )
}

Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func
}

export default Button;