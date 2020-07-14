import { connect } from "react-redux";

import TimerPlayer from "./TimerPlayer";
import {
  getSelectedTimer,
} from "../../selectors/index";
import { deleteTimer } from "../../actions/index";

const mapStateToProps = (state, ownProps) => ({
  timer: getSelectedTimer(state, ownProps.id)
});

const mapDispatchToProps = {
  deleteTimer
};


export default connect(mapStateToProps, mapDispatchToProps)(TimerPlayer);
