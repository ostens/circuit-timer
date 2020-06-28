import { connect } from "react-redux";

import TimerList from "./TimerList";
import {
  getTimers
} from "../../selectors/index.js";

const mapStateToProps = state => ({
  timers: getTimers(state),
});

export default connect(mapStateToProps)(TimerList);
