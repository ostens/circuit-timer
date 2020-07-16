import React from "react";
import PropTypes from "prop-types";

import SoundOn from "../../Icons/sound-on.svg";
import SoundOff from "../../Icons/sound-off.svg";
import "./AudioButton.scss"

const AudioButton = ({
  onClick = () => { },
  disabled
}) => {
  return (
    <div className="audioButtonWrapper">
      <button
        className="audioButton"
        onClick={onClick}
      >
        <img className="audioImage" src={disabled ? SoundOff : SoundOn} alt="Audio Button" />
      </button>
    </div>
  )
}

AudioButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
}

export default AudioButton;
