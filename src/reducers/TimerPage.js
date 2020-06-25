
import { FETCH_TIMER } from "../actions/TimerPage";
import { getTimers } from "../selectors/TimerList";

const INITIAL_STATE = {
  timer: {
    timerName: "Default",
    activeTime: 20,
    restTime: 10,
    intervals: 10
  }
};

const timers = (state) => getTimers(state);

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TIMER:
      return {
        ...state
      };
    default:
      return state;
  }
};

