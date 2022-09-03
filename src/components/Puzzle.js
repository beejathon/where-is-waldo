import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import Cursor from "./Cursor";
import Dialog from "./Dialog";
import waldo from '../assets/waldo.jpg';
import { 
  collection,
  doc, 
  getDoc,
  getDocs,
  limit,
  orderBy,
  query, 
} from "firebase/firestore";
import { db } from "../App";

const Puzzle = (props) => {
  const {
    toggleGameActive,
    seconds,
    toggleScores,
    gameFinished,
    toggleGameFinished
  } = props;
  const [coords, setCoords] = useState({x: 0, y: 0});
  const [clicked, setClicked] = useState(false);
  const [showCursor, setShowCursor] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [found, setFound] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false
  });

  const handleClick = (data) => {
    setCoords(data);
    toggleClicked();
  }

  const toggleClicked = () => {
    clicked ? setClicked(false) : setClicked(true);
  }

  const toggleDialog = () => {
    showDialog ? setShowDialog(false) : setShowDialog(true);
  }

  const toggleCursor = () => {
    showCursor ? setShowCursor(false) : setShowCursor(true);
  }

  const onMouseMove = (e) => {
    if (!clicked)
    setCoords({ x: e.clientX, y: e.clientY })
  }

  const getCoords = () => {
    const img = document.querySelector('.waldo');
    let bounds = img.getBoundingClientRect();
    let left = bounds.left + window.scrollX;
    let top = bounds.top + window.scrollY;
    let cX = coords.x - left;
    let cY = coords.y - top;
    let cW = img.clientWidth;
    let cH = img.clientHeight;
    let iW = img.naturalWidth;
    let iH = img.naturalHeight;

    let x = parseInt(cX / cW * iW);
    let y = parseInt(cY / cH * iH);

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
    if (valid) {
      setCorrect(true);
      setFound({...found, [id]: true});
    } else {
      setCorrect(false);
    }
    toggleDialog();
  }

  const checkGame = () => {
    let win = Object.values(found).every((value) => value === true)
    if (win === true) {
      toggleGameActive();
      checkScore(seconds);
    }
  }

  const checkScore = async (score) => {
    let hiScore = false;
    const scoresRef = collection(db, "highscores");
    const q = query(scoresRef, orderBy("score", "asc"), limit(10))
    const scores = await getDocs(q);
    scores.forEach((doc) => {
      if (score < doc.data().score) hiScore = true;
    })
    toggleScores(hiScore);
    setShowDialog(false);
    toggleGameFinished();
  }

  const resetPuzzle = () => {
    setClicked(false);
    setShowDialog(false);
    setCorrect(false);
    setFound({
      1: false,
      2: false,
      3: false,
      4: false,
      5: false
    })
  }

  useEffect(() => {
    checkGame();
  }, [found])

  useEffect(() => {
    if (!gameFinished) resetPuzzle();
  }, [gameFinished])

  return (
    <div className="puzzle-container" 
      onMouseLeave={toggleCursor}
      onMouseEnter={toggleCursor}>
      <img src={waldo} alt="wimmelbilder" className="waldo" onMouseMove={onMouseMove} />
      <Cursor 
        coords={coords}
        clicked={clicked}
        showCursor={showCursor}
       />
      <Menu 
        coords={coords} 
        handleClick={handleClick} 
        toggleClicked={toggleClicked}
        clicked={clicked}
        checkClick={checkClick}
        found={found}
      />
      <Dialog 
        showDialog={showDialog} 
        correct={correct} 
        toggleDialog={toggleDialog} 
      />
    </div>
  )
}

export default Puzzle;