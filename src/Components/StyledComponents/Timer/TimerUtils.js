export const convertTime = (totalSeconds) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60 || "00";
  return(`${minutes}:${seconds}`);
}