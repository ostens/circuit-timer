
import { SUBMIT_TIMER } from "../actions/TimerForm";
import { FETCH_TIMER } from "../actions/TimerPage";

const initialTimer = {
  timerName: "Default",
  activeTime: 20,
  restTime: 10,
  intervals: 10
};

const INITIAL_STATE = {
  timers: [initialTimer],
  timer: initialTimer
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SUBMIT_TIMER:
      return {
        ...state,
        timers: state.timers.concat({
          timerName: action.timerName,
          activeTime: action.activeTime,
          restTime: action.restTime,
          intervals: action.intervals
        })
      };
    case FETCH_TIMER:
      return {
        ...state,
        timer: state.timers[action.id] || state.timer
      };
    default:
      return state;
  }
};
