import React from "react";
import Timer from "./Timer";

const Header = ({seconds}) => {
  return (
    <div className="header">
      <div className="logo">
        placeholder logo
      </div>
      <div className="waldo-list">
        123
      </div>
      <Timer seconds={seconds} />
    </div>
  )
}

export default Header;