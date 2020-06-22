export const SUBMIT_TIMER = "SUBMIT_TIMER";

export const submitTimer = (activeTime, restTime, intervals) => ({
  type: SUBMIT_TIMER,
  activeTime,
  restTime,
  intervals
});
