import "./Footer.css"
import icon from "../assets/sunIcon.png"
import { FaGithub, FaLinkedin } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContent">
       <div className="title">
       <span><img src={icon}/> Weather's Dev</span>
            <p>&copy;Made by <a href="https://github.com/thegvictor" target='_blank'>Gabriel Sancinetti</a>, using the <a href="https://hgbrasil.com/" target='_blank'>HGBrasil</a> API </p>
          </div>
          <aside className="personalInfo">
            <a href="https://github.com/thegvictor" target="_blank"><FaGithub/></a>
            <a href="" target="_blank"><FaLinkedin/></a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gabrielsancinetti@gmail.com&su=A very important topic&body=Hello, Gabriel! I'd like to talk about..." target="_blank"><MdEmail/></a>
          </aside>
          </div>
    </div>
  )
}

export default Footer
