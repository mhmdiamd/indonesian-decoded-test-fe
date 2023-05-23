export const getDayFromForecast = (time) => {
  const splitTime = time.split(" ")
  const day = splitTime[0].split("-")

  return day[2]
}