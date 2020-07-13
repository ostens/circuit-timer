import React from "react";

import TimerPlayer from "../TimerPlayer/TimerPlayerContainer";

const SelectedTimer = ({ match: { params } }) => {
  return (
    <TimerPlayer id={params.id}/>
  );
}

export default SelectedTimer;
