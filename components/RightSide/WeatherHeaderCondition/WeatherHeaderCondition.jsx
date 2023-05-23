import React, { useEffect, useState } from 'react'
import styles from './WeatherHeaderCondition.module.css'
import { checkWeatherCondition } from '../../../lib/weatherCondition'
import { useSelector } from 'react-redux'

const WeatherHeaderCondition = ({ data }) => {
  const [weatherIcon, setWeatherIcon] = useState("")

  const { currentWeather } = useSelector(state => state.weather)
  const dateTime = new Date(currentWeather?.dt * 1000)

  const day = dateTime.toString().split(" ")[0]
  const date = dateTime.toString().split(" ")[2]
  const month = dateTime.toString().split(" ")[1]

  useEffect(() => {
    if (data) {
      setWeatherIcon(() => (
        checkWeatherCondition(data?.weather?.[0].description)
      ))
    } else {
      setWeatherIcon(() => (
        checkWeatherCondition(currentWeather?.weather?.[0].description)
      ))
    }

  }, [currentWeather])


  return (
    <div className="labelWeather d-flex align-items-center">
      <img src={weatherIcon} className={`${styles.cloudImage}`} alt="cloud-image" />
      <div className="day-information ms-2 d-flex justify-content-center flex-column">
        <span className={`fs-5 text-light`}>Today</span>
        <span className={`${styles.dayInformation}`}>{day}, {date} {month}</span>
      </div>
    </div>
  )
}

export default WeatherHeaderCondition