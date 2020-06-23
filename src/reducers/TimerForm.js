
import { SUBMIT_TIMER } from "../actions/TimerForm";

const INITIAL_STATE = {
  activeTime: 20,
  restTime: 10,
  intervals: 10
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SUBMIT_TIMER:
      return {
        ...state,
        activeTime: action.activeTime,
        restTime: action.restTime,
        intervals: action.intervals,
      };
    default:
      return state;
  }
};
