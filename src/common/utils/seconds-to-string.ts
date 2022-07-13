const secondsToString = (time: number) => {
  const seconds = time % 60;
  const minutes = ((time - seconds) / 60) % 60;
  const hours = ((time - seconds) / 60 - minutes) / 60;
  if (hours > 0) return `${hours}h ${minutes}m`;
  return `${minutes}m`;
};

export default secondsToString