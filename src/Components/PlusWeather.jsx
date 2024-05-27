import './Weather.css'

const PlusWeather = ({weather}) => {
  return (
    <div className="weatherContainer">
     <div className="plusInfo">
      <span><i className="fa-solid fa-temperature-arrow-up"></i>{weather.max}ºC</span>
      <span><i className="fa-solid fa-temperature-arrow-down"></i>{weather.min}ºC</span>
    <span><i className="fa-solid fa-wind"></i>{weather.wind_speedy}</span>
     <span><i className="fa-solid fa-droplet"></i>{weather.humidity}%</span>
     </div>
  </div>
  )
}

export default PlusWeather
