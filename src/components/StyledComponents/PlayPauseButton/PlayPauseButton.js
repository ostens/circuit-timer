import React from "react";
import PropTypes from "prop-types";

import Play from "../../Icons/play.svg";
import Pause from "../../Icons/pause.svg";
import "./PlayPauseButton.scss";

const PlayPauseButton = ({
  onClick = () => { },
  action
}) => (
    <div className="playPauseButtonWrapper">
      <button
        className="playPauseButton"
        name="Play Pause Button"
        onClick={onClick}>
        <img
          className="playPauseIcon"
          src={action === "Play" ? Play : Pause}
          alt="Play Button" />
      </button>
    </div>
  );

PlayPauseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  action: PropTypes.string.isRequired
}

export default PlayPauseButton;
