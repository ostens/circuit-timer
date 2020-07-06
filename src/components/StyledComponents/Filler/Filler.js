import React from "react";
import PropTypes from "prop-types";

import "./Filler.scss";

const Filler = ({
    percentage,
    type
}) => {

  return (
    <div
        className={`filler ${type === "active" ? "active" : "rest"}`} 
        style={{ width: `${percentage}%`}}
    >
    </div>
  )
}

Filler.propTypes = {
    percentage: PropTypes.number.isRequired,
    type: PropTypes.string
};

export default Filler;
