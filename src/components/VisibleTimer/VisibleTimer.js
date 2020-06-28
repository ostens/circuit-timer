import React from "react";

import TimerPage from "../TimerPage/TimerPageContainer";

const VisibleTimer = ({ match: { params } }) => {
  return (
    <TimerPage id={params.id}/>
  );
}

export default VisibleTimer;
