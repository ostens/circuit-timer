import React from "react";
import PropTypes from "prop-types";

import "./InputNumberCard.scss"

const InputNumberCard = ({
  title,
  onClick = () => { },
  value,
  increments
}) => {
  return (
    <>
      <div>{title}: {value}</div>
      <div>{increments.map(increment => {
        return <button id={increment} key={increment} onClick={onClick}>{increment}</button>
      })}</div>
    </>
  )
}

InputNumberCard.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  value: PropTypes.number,
  increments: PropTypes.array
}

export default InputNumberCard;
