export const SUBMIT_TIMER = "SUBMIT_TIMER";

export const submitTimer = (timerName, activeTime, restTime, intervals) => ({
  type: SUBMIT_TIMER,
  timerName,
  activeTime,
  restTime,
  intervals
});
