import { connect } from "react-redux";

import TimerPage from "./TimerPage";
import {
  getActiveTime,
  getRestTime,
  getIntervals,
} from "../../selectors/TimerPage.js";

const mapStateToProps = state => ({
  activeTime: getActiveTime(state),
  restTime: getRestTime(state),
  intervals: getIntervals(state)
});

export default connect(mapStateToProps)(TimerPage);
