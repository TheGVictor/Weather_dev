import "./NextDays.css"
import { urlImg } from "../App"

const NextDays = ({weather}) => {
  return (
    <div className="daysContainer">
        <ul className="listDays">
          {weather.nextDays?.map((item) => (
            <li key = {item[1].date} className="dayInfo">
              <span className="dateInfo">{item[1].date} {item[1].weekday}</span>
              
              </li>
          ))}
        </ul>
        </div>
  )
}

export default NextDays
