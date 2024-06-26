import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import icon from "./assets/sunIcon.png"

//Components
import MainWeather from './Components/MainWeather'
import PlusWeather from './Components/PlusWeather'
import NextDays from './Components/NextDays'
import Footer from './Components/Footer'
import axios from 'axios'
import Loading from './Components/Loading'



export const urlImg = "https://assets.hgbrasil.com/weather/icons/conditions"




function App() {

const [weather, setWeather] = useState([])
const [show, setShow] = useState(4)
const [background, setBackground] = useState([])
const [showLoading, setShowLoading] = useState(false)


const url = "https://api.hgbrasil.com/weather?format=json-cors&key=e4faedfe "
const bgUrl = "https://api.unsplash.com/search/photos"

useEffect(() => {
  setShowLoading(true)
  async function getWeather() {
    const res = await fetch(url, {
      header: {
        "Access-Control-Allow-Origin": "https:/thegvictor.github.io/*",
        "Access-Control-Allow-Origin": "GET, PUT, POST, DELETE"
      }
    })
    const data = await res.json()
  
    setWeather({
      temp: data.results.temp,
      city: data.results.city_name,
      desc: data.results.description,
      currently: data.results.currently,
      conditionToday: urlImg+(`/${data.results.condition_slug}.svg`),
      weekday: data.results.forecast[0].weekday,
      date: data.results.forecast[0].date,
      max: data.results.forecast[0].max,
      min: data.results.forecast[0].min,
      wind_speedy: data.results.wind_speedy,
      humidity: data.results.humidity,
      nextDays: data.results.forecast
  })
  setShowLoading(false)
  }

  async function getBackground(){
    try{
      const {data} = await axios.get(`${bgUrl}?query=${weather.city ? weather.city : "Beautifull background"}&page=1&per_page=1&client_id=${import.meta.env.VITE_KEY}`)
      setBackground(data.results)

    }catch(error){
      window.alert("Algo deu errado, tente novamente")
    }

  }
  getWeather()
  getBackground()
  
},[])

const handleShowMore = () => {
  setShow(7)
  document.querySelector('.btnShowMore').style.display = "none"
}

  return (
    <div className="app">
      <div className="headerContainer">
        <div className="header">
          <div className="title">
            <img src={icon}/><span>Weather's Dev</span>
          </div>
          {/* <input type="text" placeholder='Type a city...' value={city} onChange={(e) => setCity(e.target.value)} className='inputContainer'/> */}
          <span><a href="https://hgbrasil.com/" target='_blank'>HGBrasil</a></span>
        </div>
      </div>

      
      <div className="mainContainer">
        
        {background.map((img) => (
          <img
          key={img.id}
           src={img.urls.full}
           alt={img.alt_description} 
           className='bgCity'
           />
        ))}
        
      <MainWeather weather={weather}/>
      <PlusWeather weather = {weather}/>
      </div>

    <div className="weekinfoContainer">
        <h1 className='title'>Nos próximos dias</h1>
        
        <div className="daysContainer">
        <ul>
          {weather.nextDays?.map((item) => (
            <li key={item.date}>
              <NextDays weather={item}/>
            </li>
          )).splice(1, show)}
        </ul>
          <button className="btnShowMore" onClick={handleShowMore}>
            Carregar mais
          </button>

    </div>
    </div>
          <Footer/>
          { showLoading && <Loading/>}
    </div>
  )
}

export default App
