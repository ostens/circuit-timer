import React from "react";

import NavBar from "../NavBar/NavBar";
import AddButton from "../StyledComponents/AddButton/AddButton";
import "./TimerList.css";

class TimerList extends React.Component {

  render() {
    return (
      <>
        <NavBar title="Timers" showBackButton={false} />
        <div>You haven't added any timers yet.</div>
        <AddButton
          url="/timers/new">
        </AddButton>

      </>
    );
  }
}

export default TimerList;
