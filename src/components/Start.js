import React, { useEffect, useState } from "react";
import '../App.css'

const Start = ({gameStart, toggleGameStart}) => {
  const [open, setOpen] = useState(false);

  const onClick = () => {
    setOpen(false);
    toggleGameStart();
  }

  useEffect(() => {
    if (!gameStart) setOpen(true);
  }, [gameStart])
  
  return (
    <div className={open ? `start-container` : `hidden`}>
      <div className="start-menu">
        <h1>Find these weird lil dudes</h1>
        <div>weird lil dude</div>
        <div>weird lil dude</div>
        <div>weird lil dude</div>
        <div>weird lil dude</div>
        <div>weird lil dude</div>
        <button onClick={onClick}>Start</button>
      </div>
    </div>
  )
}

export default Start;