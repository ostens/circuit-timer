import { SUBMIT_TIMER } from "../actions/index";

const initialTimer = {
  timerName: "Default",
  activeTime: 20,
  restTime: 10,
  intervals: 10
};

const INITIAL_STATE = {
  timers: [initialTimer]
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
    default:
      return state;
  }
};
