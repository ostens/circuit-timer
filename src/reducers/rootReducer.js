import { combineReducers } from "redux";

import timerForm from "./TimerForm";

const rootReducer = combineReducers({
    timerReducer: timerForm
  });

export default rootReducer;
