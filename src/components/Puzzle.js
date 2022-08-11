import React, { useState } from "react";
import Menu from "./Menu";
import Cursor from "./Cursor";
import waldo from '../assets/waldo.jpg';

const Puzzle = () => {
  const [coords, setCoords] = useState({x: 0, y: 0});
  const [clicked, setClicked] = useState(false);

  const handleClick = (data) => {
    setCoords(data);
    setClicked(true);
  }

  const handleMouseLeave = () => {
    setClicked(false);
  }

  const onMouseMove = (e) => {
    if (!clicked) {
      setCoords({ x: e.clientX, y: e.clientY })
    }
  }

  return (
    <div className="puzzle-container" onMouseMove={onMouseMove}>
      <img src={waldo} alt="wimmelbilder" className="waldo" />
      {clicked || <Cursor coords={coords} /> }
      <Menu coords={coords} handleClick={handleClick} handleMouseLeave={handleMouseLeave}/>
    </div>
  )
}

export default Puzzle;