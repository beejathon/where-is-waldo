import React, { useEffect, useState } from "react";
import '../App.css'

const Start = (props) => {
  const {
    gameActive, 
    toggleGameActive, 
    showScores, 
    gameFinished, 
    toggleGameFinished
  } = props;
  const [open, setOpen] = useState(false);

  const onClick = () => {
    setOpen(false);
    toggleGameActive();
    toggleGameFinished();
  }

  useEffect(() => {
    if (
      !gameActive && 
      gameFinished && 
      !showScores) 
    setOpen(true);
  }, [gameActive, gameFinished, showScores])
  
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