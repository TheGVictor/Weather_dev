import './Weather.css'
import { FaTemperatureArrowUp, FaTemperatureArrowDown, FaDroplet } from 'react-icons/fa6'
import { FiWind } from 'react-icons/fi'


const PlusWeather = ({weather}) => {
  return (
    <div className="weatherContainer">
     <div className="plusInfo">
      <span><FaTemperatureArrowUp className='iconInfo'/>{weather.max}ºC</span>
      <span><FaTemperatureArrowDown className='iconInfo'/>{weather.min}ºC</span>
    <span><FiWind className='iconInfo'/>{weather.wind_speedy}</span>
     <span><FaDroplet className='iconInfo'/>{weather.humidity}%</span>
     </div>
  </div>
  )
}

export default PlusWeather
