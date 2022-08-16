import React from "react";
import Timer from "./Timer";

const Header = ({gameStart}) => {
  return (
    <div className="header">
      <div className="logo">
        placeholder logo
      </div>
      <div className="waldo-list">
        123
      </div>
      <Timer gameStart={gameStart}/>
    </div>
  )
}

export default Header;