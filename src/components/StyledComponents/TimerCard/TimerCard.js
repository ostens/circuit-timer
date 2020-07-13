import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

import { calculateTotalTime, convertTime } from "../../TimerPlayer/TimerPlayerUtils";
import { path } from "../../../constants";
import "./TimerCard.scss";

const TimerCard = ({
  timer,
  id,
  history
}) => {
  const { timerName, activeTime, restTime, intervals } = timer;

  const totalTime = calculateTotalTime(activeTime, restTime, intervals);

  const redirect = () => {
    history.push(`${path.list}/${id}`);
  }

  return (
    <div
      className="timerCard"
      onClick={redirect}>
      <div className="totalTime">
        {convertTime(totalTime)}
      </div>
      <div className="subtextWrapper">
        <div className="subtext">{timerName}</div>
        <div className="subtext">
          <i className="arrow up" />
          {activeTime}s
          <i className="dividor">•</i>
          <i className="arrow down" />
          {restTime}s
        </div>
        <div className="subtext">{intervals} intervals </div>
      </div>
    </div>
  )
}

TimerCard.propTypes = {
  timer: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  history: PropTypes.object.isRequired,
};

const RoutedTimerCard = withRouter(TimerCard);

export default RoutedTimerCard;
