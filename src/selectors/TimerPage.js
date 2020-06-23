const root = state => state;

export const getActiveTime = state => root(state).activeTime;
export const getRestTime = state => root(state).restTime;
export const getIntervals = state => root(state).intervals;
