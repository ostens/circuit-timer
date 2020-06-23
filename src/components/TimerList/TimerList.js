import React from "react";

import NavBar from "../NavBar/NavBar";
import TimerCard from "../StyledComponents/TimerCard/TimerCard";
import AddButton from "../StyledComponents/AddButton/AddButton";
import "./TimerList.scss";

const TimerList = ({
  timers
}) => {
  return (
    <>
      <NavBar title="Timers" showBackButton={false} />
      <div className="timerList">
        {timers.map(timer => {
          return (
            <TimerCard
              timer={timer}
            />
          )
        })}
      </div>
      <div>{timers.length ? "" : "No timers to show"}</div>
      <AddButton
        url="/timers/new">
      </AddButton>
    </>
  );
}

export default TimerList;
