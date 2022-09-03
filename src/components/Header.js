import React from "react";
import Timer from "./Timer";
import waldo1 from '../assets/1.png'
import waldo2 from '../assets/2.png'
import waldo3 from '../assets/3.png'
import waldo4 from '../assets/4.png'
import waldo5 from '../assets/5.png'

const Header = ({seconds}) => {
  return (
    <div className="main-header">
      <span className="main-title">WHERE THE WALDOS AT?</span>
      <div className="spacer"></div>
      <div className="header-waldos-wrapper">
          <div className="header-waldos">
            <img src={waldo1} alt="waldo1" />
          </div>
          <div className="header-waldos">
            <img src={waldo2} alt="waldo2" />
          </div>
          <div className="header-waldos">
            <img src={waldo3} alt="waldo3" />
          </div>
          <div className="header-waldos">
            <img src={waldo4} alt="waldo4" />
          </div>
          <div className="header-waldos">
            <img src={waldo5} alt="waldo5" />
          </div>
        </div>
      <div className="spacer"></div>
      <Timer seconds={seconds} />
    </div>
  )
}

export default Header;