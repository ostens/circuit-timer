import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

import { calculateTotal, convertTime } from "../Timer/TimerUtils";
import { path } from "../../../constants";
import "./TimerCard.scss";

const TimerCard = ({
  timer,
  id,
  history
}) => {
  const { timerName, activeTime, restTime, intervals } = timer;
  const totalTime = convertTime(calculateTotal(activeTime, restTime, intervals));

  const redirect = () => {
    history.push(`${path.list}/${id}`);
  }

  return (
    <div
      className="timerCard"
      onClick={redirect}>
      <div className="total">
        {totalTime}
      </div>
      <div className="content">
        <div className="title">{timerName}</div>
        <div className="text">
          <i
            className="arrow up"
          />
          {activeTime}s
          <i className="dividor">•</i>
          <i
            className="arrow down"
          />
          {restTime}s
      </div>
        <div className="text">{intervals} intervals </div>
      </div>
    </div>
  )
}

TimerCard.propTypes = {
  history: PropTypes.object.isRequired,
};

const RoutedTimerCard = withRouter(TimerCard);

export default RoutedTimerCard;
