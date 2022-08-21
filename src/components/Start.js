import React, { useEffect, useState } from "react";
import waldo1 from '../assets/1.png'
import waldo2 from '../assets/2.png'
import waldo3 from '../assets/3.png'
import waldo4 from '../assets/4.png'
import waldo5 from '../assets/5.png'
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
        <h1>Welcome</h1>
        <h3>How to play: find them all in the painting!</h3>
        <div className="waldos-wrapper">
          <div className="pic-container">
            <img src={waldo1} alt="waldo1" />
          </div>
          <div className="pic-container">
            <img src={waldo2} alt="waldo2" />
          </div>
          <div className="pic-container">
            <img src={waldo3} alt="waldo3" />
          </div>
          <div className="pic-container">
            <img src={waldo4} alt="waldo4" />
          </div>
          <div className="pic-container">
            <img src={waldo5} alt="waldo5" />
          </div>
        </div>
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" onClick={onClick}>Start</button>
      </div>
    </div>
  )
}

export default Start;