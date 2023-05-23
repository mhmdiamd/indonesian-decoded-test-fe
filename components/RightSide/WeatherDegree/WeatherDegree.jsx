import React, { useEffect, useState } from 'react'
import styles from './WeatherDegree.module.css'
import { useSelector } from 'react-redux'

const WeatherDegree = () => {
  const { currentWeather } = useSelector(state => state.weather)

  const [currentDegree, setCurrentDegree] = useState(0)
  const [minDegree, setMinDegree] = useState(0)
  const [maxDegree, setMaxDegree] = useState(0)

  useEffect(() => {
    setCurrentDegree(Math.floor(currentWeather?.main?.temp))
    setMinDegree(Math.floor(currentWeather?.main?.temp_min))
    setMaxDegree(Math.floor(currentWeather?.main?.temp_max))
  }, [currentWeather])

  return (
    <>
      <div className={`degree d-flex align-items-end mb-4`}>

        {/* Min Degree */}
        <span className={`text-light me-3 fs-4 text-very-semiwhite`}>
          <span className='text-small'>min</span>  {minDegree}
        </span>

        {/* Main Degree */}
        <div className={`text-light d-flex align-items-start`}>
          <span className={`${styles.degreeNumber}`}>{currentDegree}</span>
          <span className='fs-4 '>
            <span className='fs-3'>°</span>C
          </span>
        </div>

        {/* Max Degree */}
        <span className={`text-light ms-3 fs-4 text-very-semiwhite`}>{maxDegree}   
          <span className='text-small ms-1'>max</span>  
        </span>
      </div>
    </>
  )
}

export default WeatherDegree