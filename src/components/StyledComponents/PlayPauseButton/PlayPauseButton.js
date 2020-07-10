import React from "react";
import PropTypes from "prop-types";

import Play from "../../Icons/play.svg";
import Pause from "../../Icons/pause.svg";
import Restart from "../../Icons/restart.svg";
import "./PlayPauseButton.scss";

const PlayPauseButton = ({
  onClick = () => { },
  action
}) => {

  const selectControlIcon = () => {
    if (action === "Play") {
      return Play;
    } else if (action === "Pause") {
      return Pause;
    } else if (action === "Restart") {
      return Restart;
    }
  }

  return (
    <div className="playPauseButtonWrapper">
      <button
        className="playPauseButton"
        name="Play Pause Button"
        onClick={onClick}>
        <img
          className="playPauseIcon"
          src={selectControlIcon()}
          alt="Play Button" />
      </button>
    </div>
  )
};

PlayPauseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  action: PropTypes.string.isRequired
}

export default PlayPauseButton;
