const root = state => state.timers[0];

export const getActiveTime = state => root(state).activeTime;
export const getRestTime = state => root(state).restTime;
export const getIntervals = state => root(state).intervals;
