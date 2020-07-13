import { connect } from "react-redux";

import TimerPlayer from "./TimerPlayer";
import {
  getSelectedTimer,
} from "../../selectors/index";

const mapStateToProps = (state, ownProps) => ({
  timer: getSelectedTimer(state, ownProps.id)
});


export default connect(mapStateToProps, null)(TimerPlayer);
