import React from "react";
import PropTypes from "prop-types";

import Audio from "../../Icons/headphones.svg";
import "./AudioButton.scss"

const AudioButton = ({
  onClick = () => { }
}) => {
  return (
    <div className="audioButtonWrapper">
      <button
        className="audioButton"
        onClick={onClick}
      >
        <img className="audioImage" src={Audio} alt="Audio Button" />
      </button>
    </div>
  )
}

AudioButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default AudioButton;
