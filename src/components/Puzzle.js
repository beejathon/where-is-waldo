import React, { useState } from "react";
import Menu from "./Menu";
import Cursor from "./Cursor";
import Dialog from "./Dialog";
import waldo from '../assets/waldo.jpg';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../App";

const Puzzle = () => {
  const [coords, setCoords] = useState({x: 0, y: 0});
  const [clicked, setClicked] = useState(false);
  const [selected, setSelected] = useState(false);
  const [correct, setCorrect] = useState(false);

  const handleClick = (data) => {
    setCoords(data);
    setClicked(true);
  }

  const toggleClicked = () => {
    setClicked(false);
  }

  const onMouseMove = (e) => {
    if (!clicked)
    setCoords({ x: e.clientX, y: e.clientY })
  }

  const getCoords = () => {
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

    return { x: x, y: y }
  }

  const checkClick = async (id) => {
    if (!id) return;
    const {x, y} = getCoords();

    const docRef = doc(db, "waldos", id);
    const waldo = await getDoc(docRef);
    const valid = Boolean(
      waldo.id === id &&
      x >= waldo.data().xLeft &&
      x <= waldo.data().xRight &&
      y >= waldo.data().yTop &&
      y <= waldo.data().yBottom
    )
    valid ? setCorrect(true) : setCorrect(false)
    setSelected(true)
  }

  const toggleSelect = () => {
    setSelected(false)
  }

  return (
    <div className="puzzle-container" >
      <img src={waldo} alt="wimmelbilder" className="waldo" onMouseMove={onMouseMove} />
      { clicked || <Cursor coords={coords} /> }
      <Menu 
        coords={coords} 
        handleClick={handleClick} 
        toggleClicked={toggleClicked}
        clicked={clicked}
        checkClick={checkClick}
      />
      <Dialog 
        selected={selected} 
        correct={correct} 
        toggleSelect={toggleSelect} 
      />
    </div>
  )
}

export default Puzzle;