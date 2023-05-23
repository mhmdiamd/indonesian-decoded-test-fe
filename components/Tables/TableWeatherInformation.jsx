import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../../helpers/useFetch'
import { getDayFromForecast } from '../../helpers/getDayFromForecast'
import { getCurrentDate, getTimeFromDate } from '../../helpers/convertTime'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureThreeQuarters } from '@fortawesome/free-solid-svg-icons'
import IconInformation from '../IconInformation/IconInformation'
import cloudWindImage from "../../src/assets/cloud-wind.png"


const TableWeatherInformation = ({city}) => {

  const [weathers, setWeathers] = useState([])
  const { currentWeather } = useSelector(state => state.weather)
  const {data: dataWeatherForecast, isLoading} = useFetch(`${import.meta.env.VITE_API_URL}/forecast?q=${currentWeather ? currentWeather.name: city}&appid=${import.meta.env.VITE_API_KEY}&mode=json&units=metric&cnt=7`)

  useEffect(() => {
    const currentDay = getCurrentDate(currentWeather?.dt)
    const newWeathers = []
    
    // Handling first data city to render data table
    dataWeatherForecast?.list?.forEach(weather => {
      const weatherDay = getDayFromForecast(weather.dt_txt)
      if(weatherDay == currentDay){
        if(currentWeather?.name?.toLowerCase() == dataWeatherForecast?.city?.name) {
          setWeathers(prev => {
            return [
              ...prev,
              weather
            ]
          })
        }else {
          newWeathers.push(weather)
        }
      }
    })

    if(newWeathers.length >= 1) {
      return () => setWeathers(newWeathers)
    }
  }, [isLoading, currentWeather])

  console.log(dataWeatherForecast)

  

  return (
    <table className="table ms-2 table-borderless">
      <tbody>
        {weathers?.map((weather, i) => (
          <tr className='mb-2' key={i}>
            <td className='fs-4 py-2'>
              {getTimeFromDate(weather.dt_txt)}
            </td>

            <td className='text-dark py-2'>
              <IconInformation data={weather} value={weather.weather[0].main} desc={weather.weather[0].description} textColor={"text-dark"} />
            </td>

            <td className='text-dark py-2 '>
              <IconInformation image={cloudWindImage} 
                value={`${weather.wind.speed} m/s`} 
                desc={"Wind Speed"} 
                textColor={"text-dark"}
              />
            </td>

            <td className='fs-5 py-2 text-center'>
              <FontAwesomeIcon className='me-2 text-primary' icon={faTemperatureThreeQuarters} />
              {Math.ceil(weather?.main?.temp)}°C
            </td>

          </tr>
        ))}
      </tbody>
    </table>
    )
}

export default TableWeatherInformation