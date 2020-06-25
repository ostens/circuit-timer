import { connect } from "react-redux";

import TimerPage from "./TimerPage";
import {
  getActiveTimer,
} from "../../selectors/TimerPage";
import { fetchTimer } from "../../actions/TimerPage";

const mapStateToProps = (state) => ({
  timer: getActiveTimer(state)
});

const mapDispatchToProps = {
  fetchTimer
};

export default connect(mapStateToProps, mapDispatchToProps)(TimerPage);
