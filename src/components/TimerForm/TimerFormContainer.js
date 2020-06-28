import { connect } from "react-redux";

import TimerForm from "./TimerForm";
import { submitTimer } from "../../actions/index";

const mapDispatchToProps = {
  submitTimer
};

export default connect(null, mapDispatchToProps)(TimerForm);
