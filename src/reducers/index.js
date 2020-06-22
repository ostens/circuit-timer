import { combineReducers } from "redux";

import timerForm from "./TimerForm";

const rootReducer = () =>
  combineReducers({
    timerForm,
  });

export default rootReducer;
