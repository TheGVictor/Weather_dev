import "./Weather.css"

const MainWeather = ({weather}) => {
  return (
    <div className="weatherContainer">
    <h1>{weather.city}</h1>
    <h4>{weather.weekday}, {weather.date}</h4>
    <div className="weatherInfo">
    <img src={weather.conditionToday}/>
    <h2>{weather.temp}ºC</h2>
    </div>
    </div>
  )
}

export default MainWeather
