import React, { useCallback, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import useFetch from '../../helpers/useFetch';
import styles from './CardWeather.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentWeather } from '../../src/reducer/weatherSlice';
import { decimalToDMS } from '../../helpers/decimalToDMSConverter';

const CardWeather = ({ data, index }) => {
  const dispatch = useDispatch()
  const { currentWeather } = useSelector(state => state.weather)
  const { data: dataCity, isLoading } = useFetch(`${import.meta.env.VITE_API_URL}/weather?q=${data}&appid=${import.meta.env.VITE_API_KEY}&mode=json&units=metric`)

  const setCurrentWeatherHandler = useCallback(() => {
    dispatch(setCurrentWeather({
      currentWeather: dataCity
    }))
  }, [dataCity])

  useEffect(() => {
    if(index == 0) {
      dispatch(setCurrentWeather({currentWeather: dataCity}))
    }
  }, [dataCity])

  // const setCurrentWeatherHandler = () => {
  //   dispatch(setCurrentWeather({
  //       currentWeather: dataCity
  // }))}

  // const coordinate = dmsConverter(dataCity?.coord?.lat, dataCity?.coord?.lon)
  const latDms = decimalToDMS(dataCity?.coord?.lat)
  const lonDms = decimalToDMS(dataCity?.coord?.lon)

  return (
    <a href="#scrollspyHeading1" className='text-decoration-none'>
      <Card onClick={setCurrentWeatherHandler} className={`pointer position-relative shadow-sm border-0 overflow-hidden 
      ${currentWeather?.name?.toLowerCase() == data ? styles.currentCity : styles.cardWeather}
      `}>
        <img src={`https://source.unsplash.com/random/200x250/?${data}`} alt="image-city" className={`classImg img-fluid position-absolute h-100 w-100`} />

        <Card.Body className={`p-3 w-100 h-100 ${styles.bodyBg} position-relative`}>
          <Card.Title className='text-light'>{dataCity?.name}</Card.Title>
          <div className="long-lat d-flex flex-column">
            <span className='text-small text-light'>{latDms}</span>
            <span className='text-small text-light'>{lonDms}</span>
          </div>
        </Card.Body>
      </Card>
    </a>
  )
}

export default CardWeather