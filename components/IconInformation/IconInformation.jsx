import React from 'react'
import styles from './IconInformation.module.css'
import { checkWeatherCondition } from '../../lib/weatherCondition'

const IconInformation = ({image, data, value, desc, textColor}) => {
  return (
    <div className={`labelWeather d-flex align-items-start ${textColor}`}>
      <img src={image ? image : checkWeatherCondition(data.weather[0].description)} className={`${styles.iconImage}`} alt="cloud-image" />
      <div className="day-information ms-2 d-flex justify-content-center flex-column">
        <span>{value}</span>
        <span className={`${styles.dayInformation}`}>{desc}</span>
      </div>
    </div>
  )
}

export default IconInformation