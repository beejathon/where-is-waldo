import React, { useState } from "react";
import Menu from "./Menu";
import Cursor from "./Cursor";
import waldo from '../assets/waldo.jpg';
import { collection, query } from "firebase/firestore";
import { db } from "../App";

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
    if (!clicked)
    setCoords({ x: e.clientX, y: e.clientY })
  }

  const checkClick = async () => {
    const img = document.querySelector('.waldo');
    const bounds = img.getBoundingClientRect();
    const left = bounds.left;
    const top = bounds.top;
    const cx = coords.x - left - window.scrollX;
    const cy = coords.y - top - window.scrollY;
    const cw = img.clientWidth;
    const ch = img.clientHeight;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;
    const x = parseInt(cx / cw * iw);
    const y = parseInt(cy / ch * ih);

    console.log(x, y)
    
    // const q = query(collection(db))
  }

  return (
    <div className="puzzle-container" >
      <img src={waldo} alt="wimmelbilder" className="waldo" onMouseMove={onMouseMove} />
      { clicked || <Cursor coords={coords} /> }
      <Menu 
        coords={coords} 
        handleClick={handleClick} 
        handleMouseLeave={handleMouseLeave}
        clicked={clicked}
        checkClick={checkClick}
      />
    </div>
  )
}

export default Puzzle;