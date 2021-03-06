export const convertTime = (totalSeconds) => {
  const minutes = Math.floor(totalSeconds / 60);
  const convertSeconds = (totalSeconds) => {
    if (totalSeconds % 60 < 10) {
      return `0${totalSeconds % 60}`;
    }
    return totalSeconds % 60;
  }
  return `${minutes}:${convertSeconds(totalSeconds)}`;
}

export const calculateTotalTime = (activeTime, restTime, intervals) => {
  return (activeTime + restTime) * intervals;
}
