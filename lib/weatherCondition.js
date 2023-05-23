import fewCloudImage from '../src/assets/cloudy-sun.png'
import scatteredCloudImage from '../src/assets/cloud.png'
import brokenCloudImage from '../src/assets/broken-cloud.png'
import showerRainImage from '../src/assets/raining.png'
import cloudyRainImage from '../src/assets/cloudy-rain.png'
import thunderstormImage from '../src/assets/storm.png'
import sunnyImage from '../src/assets/sunny.png'
import hazeImage from '../src/assets/haze.png'

export const checkWeatherCondition = (description) => {
  switch(description) {
    case "clear sky" :
      return sunnyImage
    case "few clouds" : 
      return fewCloudImage
    case "scattered clouds":
      return scatteredCloudImage 
    case "broken clouds":
    case "overcast clouds":
      return brokenCloudImage
    case "shower rain":
      return showerRainImage
    case "rain":
    case "light rain":
      return cloudyRainImage
    case "thunderstorm":
      return thunderstormImage
    case "haze":
      return hazeImage
  }
}