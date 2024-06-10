import { IoHourglass } from 'react-icons/io5'
import "./Loading.css"

const Loading = () => {
  return (
    <div className="loading">
        <div className="loadingContent">
        <IoHourglass/>
        <p>Carregando...</p>
        </div>
    </div>
  )
}

export default Loading
