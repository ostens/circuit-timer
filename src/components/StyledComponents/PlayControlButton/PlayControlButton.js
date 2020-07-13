import React from "react";
import PropTypes from "prop-types";

import Play from "../../Icons/play.svg";
import Pause from "../../Icons/pause.svg";
import Restart from "../../Icons/restart.svg";
import { PLAY, PAUSE, RESTART } from "../../../constants";
import "./PlayControlButton.scss";

const PlayControlButton = ({
  onClick = () => { },
  action
}) => {

  const selectControlIcon = () => {
    switch (action) {
      case PLAY:
        return Play;
      case PAUSE:
        return Pause;
      case RESTART:
        return Restart;
      default:
        return Play;
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

PlayControlButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  action: PropTypes.string.isRequired
}

export default PlayControlButton;
