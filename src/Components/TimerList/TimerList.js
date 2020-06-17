import React from "react";

import AddButton from "../StyledComponents/AddButton/AddButton";
import "./TimerList.css";

class TimerList extends React.Component {

  render() {
    return (
      <>
        <div>You haven't added any timers yet.</div>
        <div className="controlButtonWrapper">
          <AddButton url="/timers/new">
          </AddButton>
        </div>
      </>
    );
  }
}

export default TimerList;
