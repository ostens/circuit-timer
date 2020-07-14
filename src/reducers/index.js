import { SUBMIT_TIMER, DELETE_TIMER } from "../actions/index";

const defaultTimers = [{
  timerName: "Longboi",
  activeTime: 10,
  restTime: 5,
  intervals: 10
}, {
  timerName: "Smolboi",
  activeTime: 5,
  restTime: 5,
  intervals: 2
}];

const INITIAL_STATE = {
  timers: defaultTimers
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
    case DELETE_TIMER:
      return {
        ...state,
        timers: [...state.timers.slice(0, action.index), ...state.timers.slice(action.index + 1)]
      };
    default:
      return state;
  }
};
