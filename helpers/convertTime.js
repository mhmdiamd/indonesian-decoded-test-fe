export const convertUnixToHours = (unixTime) => {
  const getTime = new Date(unixTime * 1000)
  if(getTime.getHours() < 12) {
    return `0${getTime.getHours().toString()}`
  }else {
    return getTime.getHours().toString()
  }
}

export const convertUnixToMinute = (unixTime) => {
  const getTime = new Date(unixTime * 1000)
  return getTime.getMinutes().toString()
}

export const getCurrentDate = (timeUnix) => {
  const timeToString = new Date(timeUnix * 1000).toString()
  const date = timeToString.split(" ")[2]
  return date
}

export const getTimeFromDate = (timeString) => {
  const time = timeString.split(" ")
  const timeSlice = time[1].split(":")
  return `${timeSlice[0]}:${timeSlice[1]}`
}