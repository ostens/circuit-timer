import { combineReducers } from "redux";

import timerForm from "./TimerForm";
import timerPage from "./TimerPage";

const rootReducer = combineReducers({
    timerForm,
    timerPage
  });

export default rootReducer;
