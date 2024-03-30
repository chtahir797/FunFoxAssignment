import './Header.css'
import Logo from "../assets/Logo.png";
import WeekBack from "../assets/WeekBackground.png";
const Header = () =>{
    return(
        <>
             <div className="logoweek">
          <div className="logo">
            <img src={Logo} alt="FunFox Logo" />
          </div>
          <div className="weeks">
            <div className="img">
              <img src={WeekBack} alt="Week background" />
            </div>
            <div className="text">
              <h2>Week 1</h2>
            </div>
          </div>
        </div>
        
        </>
    )
}

export default Header