import React, { useEffect, useState } from 'react'
import { cityWeatherList } from '../../../lib/cityList'
import CardWeather from '../../../components/Cards/CardWeather'
import MainTemplate from '../../../components/Template/MainTemplate'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import styles from './Home.module.css'
import {  useSelector } from 'react-redux';
import cloudWindPng from '../../assets/cloud-wind.png'
import WeatherDegree from '../../../components/RightSide/WeatherDegree/WeatherDegree';
import RowSection from '../../../components/RightSide/RowSection/RowSection';
import { convertUnixToHours, convertUnixToMinute } from '../../../helpers/convertTime';
import WeatherHeaderCondition from '../../../components/RightSide/WeatherHeaderCondition/WeatherHeaderCondition';
import windDirectionImage from "../../assets/wind-direction.png"
import TableWeatherInformation from '../../../components/Tables/TableWeatherInformation';

const Home = () => {
  let { currentWeather } = useSelector(state => state.weather)
  const [sunrise, setSunrise] = useState("")
  const [sunset, setSunset] = useState("")
  const firstCity = cityWeatherList[0]


  useEffect(() => {
    setSunrise(`Sunrise ${convertUnixToHours(currentWeather?.sys?.sunrise) + ":" + convertUnixToMinute(currentWeather?.sys?.sunrise)}`)

    setSunset(`Sunset ${convertUnixToHours(currentWeather?.sys?.sunset) + ":" + convertUnixToMinute(currentWeather?.sys?.sunset)}`)
  }, [currentWeather])

  return (
      <MainTemplate title={"Weather Information"}
        leftside={
          <>
            {cityWeatherList?.map((city, i) => (
              <div key={i} className='col-6 col-md-4 col-lg-3 mb-3'>
                <CardWeather index={i} data={city} />
              </div>
            ))}
            <div className="card pt-2 mt-3 bg-white border-0 shadow d-none d-sm-block">
              <div className="card-body">
                <TableWeatherInformation city={firstCity} />
              </div>
            </div>
          </>
        }
      >
        <div className={`${styles.rightSide} h-100 d-flex position-relative overflow-hidden`} id='scrollspyHeading1'>

          <FontAwesomeIcon className={`${styles.cloudSize1}`} icon={faCloud} />
          <FontAwesomeIcon className={`${styles.cloudSize2}`} icon={faCloud} />
          <FontAwesomeIcon className={`${styles.cloudSize3}`} icon={faCloud} />

          <div className="row d-flex flex-column w-100 justify-content-center ms-1">
            <RowSection className={"justify-content-center mb-5"}>
              <WeatherHeaderCondition />
            </RowSection>

            <RowSection className={"justify-content-center"}>
              <WeatherDegree />
            </RowSection>

            <span className={`text-light text-center text-semiwhite text-small`}>{currentWeather?.name}, Indonesia</span>
            <div className={`text-small d-flex justify-content-center text-semiwhite`}>
              <span className='me-2'>{sunset}</span>
              <span> • </span>
              <span className='ms-2'>{sunrise}</span>
            </div>

            <RowSection className={"gap-4 mt-5 justify-content-center align-items-center "}>
    
              <div className="labelWeather d-flex align-items-start">
                <img src={cloudWindPng} className={`${styles.cloudImage}`} alt="cloud-image" />
                <div className="day-information ms-2 d-flex justify-content-center flex-column">
                  <span className={`text-light`}>{currentWeather?.wind?.speed} m/s</span>
                  <span className={`${styles.dayInformation}`}>Wind Speed</span>
                </div>
              </div>

              <div className="labelWeather d-flex align-items-start">
                <img src={windDirectionImage} className={`${styles.windImage}`} alt="cloud-image" />
                <div className="day-information ms-2 d-flex justify-content-center flex-column">
                  <span className={`text-light`}>{currentWeather?.wind?.deg}°</span>
                  <span className={`${styles.dayInformation}`}>Direction</span>
                </div>
              </div>
            </RowSection>
          </div>
        </div>
      </MainTemplate>
    )
}

export default Home