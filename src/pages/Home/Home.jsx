import React, { useEffect, useState } from 'react'
import { cityWeatherList } from '../../../lib/cityList'
import CardWeather from '../../../components/Cards/CardWeather'
import MainTemplate from '../../../components/Template/MainTemplate'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay, faCircleInfo, faCloud } from '@fortawesome/free-solid-svg-icons';
import styles from './Home.module.css'
import {  useSelector } from 'react-redux';
import cloudWindPng from '../../assets/cloud-wind.png'
import WeatherDegree from '../../../components/RightSide/WeatherDegree/WeatherDegree';
import RowSection from '../../../components/RightSide/RowSection/RowSection';
import { convertUnixToHours, convertUnixToMinute } from '../../../helpers/convertTime';
import WeatherHeaderCondition from '../../../components/RightSide/WeatherHeaderCondition/WeatherHeaderCondition';
import windDirectionImage from "../../assets/wind-direction.png"
import TableWeatherInformation from '../../../components/Tables/TableWeatherInformation';
import IconInformation from '../../../components/IconInformation/IconInformation';
import ModalHistoryWeather from '../../../components/Modals/ModalHistoryWeather/ModalHistoryWeather';

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
            <div className="card pt-2 mt-3 bg-white border-0 d-none d-md-block">
              <div className="card-body">
                <TableWeatherInformation city={firstCity} />
              </div>
            </div>
          </>
        }
      >
        <div className={`${styles.rightSide} h-100 d-flex position-relative overflow-hidden`} id='scrollspyHeading1'>

          <FontAwesomeIcon icon={faCalendarDay} className={`${styles.detailIcon} fs-5 text-dark position-absolute rounded-circle pointer d-block d-md-none`} data-bs-toggle="modal" data-bs-target="#historyWeather" />
          <ModalHistoryWeather id={`historyWeather`} data={currentWeather}/>

          <FontAwesomeIcon className={`${styles.cloudSize1}`} icon={faCloud} />
          <FontAwesomeIcon className={`${styles.cloudSize2}`} icon={faCloud} />
          <FontAwesomeIcon className={`${styles.cloudSize3}`} icon={faCloud} />   

          <div className="row d-flex flex-column w-100 justify-content-center ms-1">
            <RowSection className={`justify-content-center mb-5`}>
              <WeatherHeaderCondition />
            </RowSection>

            <RowSection className={"justify-content-center align-items-center flex-column my-3"}>
              <WeatherDegree />

              <span className={`text-light text-center text-semiwhite text-small fw-semibold`}>{currentWeather?.weather?.[0].description}</span>
              <span className={`text-light text-center text-semiwhite text-small`}>{currentWeather?.name}, Indonesia</span>
              <div className={`text-small d-flex justify-content-center text-semiwhite mt-3`}>
                <span className='me-2'>{sunset}</span>
                <span> • </span>
                <span className='ms-2'>{sunrise}</span>
              </div>
            </RowSection>

            <RowSection className={"gap-4 mt-5 justify-content-center align-items-center"}>
              {/* Wind Speed */}
              <IconInformation image={cloudWindPng} value={`${currentWeather?.wind?.speed} m/s`} desc={`Wind Speed`} textColor={"text-light"}/>
              {/* Wind Direction */}
              <IconInformation image={windDirectionImage} value={`${currentWeather?.wind?.deg}°`} desc={`Direction`} textColor={"text-light"}/>
            </RowSection>
          </div>
        </div>

      </MainTemplate>
      
    )
}

export default Home