import React from "react";
import PropTypes from "prop-types";

import "./InputCard.css"

const InputCard = ({
  title
}) => {
  return (
    <h3>{title}:</h3>
  )
}

InputCard.propTypes = {
  title: PropTypes.string,
}

export default InputCard;