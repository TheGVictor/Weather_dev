import "./NextDays.css"
import { urlImg } from "../App"
import { BsCloudRainHeavy } from "react-icons/bs"
const NextDays = ({weather}) => {

  return (
      <div className="dayInfo">
      <span className="dateInfo">
      <p className="dateday">{weather.date.substring(0,2)}</p>
        <p className="weekday">{weather.weekday}</p>
        </span>
      <img src={`${urlImg}/${weather.condition}.svg`} alt="" className="nextDaysIcon"/>
      <span className="tempInfo">
        <p className="maxTemp">{weather.max}º</p>
        <p className="minTemp">{weather.min}º</p>
        </span>

        <span className="cloudiness">
          <BsCloudRainHeavy/>
          <p>{weather.cloudiness}%</p>
        </span>

        <span className="tempDesc">
          {weather.description}
        </span>


      
      </div>
  
  )
}

export default NextDays
