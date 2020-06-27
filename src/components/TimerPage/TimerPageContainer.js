import { connect } from "react-redux";

import TimerPage from "./TimerPage";
import {
  getActiveTimer,
} from "../../selectors/index";

const mapStateToProps = (state, ownProps) => ({
  timer: getActiveTimer(state, ownProps.id)
});


export default connect(mapStateToProps, null)(TimerPage);
