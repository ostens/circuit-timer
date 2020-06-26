import React from "react";
import PropTypes from "prop-types";

import TimerCard from "../StyledComponents/TimerCard/TimerCard";
import AddButton from "../StyledComponents/AddButton/AddButton";
import { path } from "../../constants";
import "./TimerList.scss";

const TimerList = ({
  timers
}) => {
  return (
    <>
      <div className="timerList">
        {timers.map(timer => {
          return (
            <TimerCard
              key={timers.indexOf(timer)}
              id={timers.indexOf(timer)}
              timer={timer}
            />
          )
        })}
      </div>
      <div>{timers.length ? "" : "No timers to show"}</div>
      <AddButton
        url={path.form}>
      </AddButton>
    </>
  );
}

TimerList.propTypes = {
  timers: PropTypes.array.isRequired,
};

export default TimerList;
