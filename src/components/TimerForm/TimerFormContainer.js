import { connect } from "react-redux";

import TimerForm from "./TimerForm";
import { submitTimer } from "../../actions/TimerForm";

const mapDispatchToProps = {
  submitTimer
};

export default connect(null, mapDispatchToProps)(TimerForm);
