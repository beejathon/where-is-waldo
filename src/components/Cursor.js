import React from "react";
import '../App.css'

const Cursor = ({coords}) => {
  return (
    <div 
      className="cursor-container"
      style={{transform: `translate3d(${coords.x}px,${coords.y}px,0px)`}}
    >
      <div className="target-box"></div>
    </div>
  )
}

export default Cursor;