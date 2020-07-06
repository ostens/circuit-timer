import React from "react";
import PropTypes from "prop-types";

import Filler from "../Filler/Filler";
import "./IntervalBar.scss";

const IntervalBar = ({
    activeTime,
    restTime,
    intervals,
}) => {
    const totalTime = activeTime + restTime;
    const activePercentage = activeTime * 100 / totalTime;
    const restPercentage = restTime * 100 / totalTime;

    return (
        <div className="intervalBar" style={{ width: `${100 / intervals}%`}}>
            <Filler percentage={activePercentage} type="active"/>
            <Filler percentage={restPercentage} type="rest"/>
        </div>
    )

}

IntervalBar.propTypes = {
    activeTime: PropTypes.number,
    restTime: PropTypes.number,
    intervals: PropTypes.number
  };
  
  export default IntervalBar;
  