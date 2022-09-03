import { collection, limit, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../App";
import '../App.css';
import ScoreInput from "./ScoreInput";

const Scores = (props) => {
  const {
    showScores, 
    isHiScore, 
    score, 
    reset
  } = props;
  const [open, setOpen] = useState(false);
  const [scores, setScores] = useState([]);
  const [showInput, setShowInput] = useState(false)

  const toggleInput = () => {
    showInput ? setShowInput(false) : setShowInput(true);
  }

  const closeScores = () => {
    setOpen(false);
    reset();
  }

  useEffect(() => {
    const scoresRef = collection(db, "highscores");
    const q = query(scoresRef, orderBy("score", "asc"), limit(10))
    const unsub = onSnapshot(q, (snapshot) => {
      setScores(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
    })

    return unsub;
  }, [])

  useEffect(() => {
    if (showScores) setOpen(true)
    if (isHiScore) toggleInput();
  }, [showScores]);

  return (
    <div className={open ? `scores-container` : `hidden`}>
      {isHiScore ? (
        <h2>New high score!</h2>
      ) : ( 
        <h2>Better luck next time!</h2>
      )}
      <div className="scores-table">
        <p className="scores-header">High Scores</p>
        <ul className="demo-list-icon mdl-list">
          {scores.map((score) => (
            <li className="mdl-list__item" key={score.id}>
              <span class="mdl-list__item-primary-content">
              <i class="material-icons mdl-list__item-icon">person</i>
              {score.name} : {score.score}
              </span>             
            </li>
          ))}
        </ul>
      </div>
      {showInput && 
        <ScoreInput 
          score={score} 
          toggleInput={toggleInput} 
        />
      }
      <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" onClick={closeScores}>Play Again?</button>
    </div>
  );
}

export default Scores;