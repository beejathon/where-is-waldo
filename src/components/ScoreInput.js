import { collection, doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../App";

const ScoreInput = ({score, toggleInput}) => {
  const [initials, setInitials] = useState(null);

  const onChange = (e) => {
    setInitials(e.target.value)
  }

  const onClick = async () => {
    const scoresRef = collection(db, "highscores");
    const data = {
      name: initials,
      score: score
    }
    await setDoc(doc(scoresRef), data);
    toggleInput();
  }

  return (
    <div className="score-input">
      <label htmlFor="name">Enter your name: </label>
      <input name="name" maxLength="10" onChange={onChange} className="initials"></input>
      <div className="user-score">Your time: {score}</div>
      <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" onClick={onClick}>Submit Score</button>
    </div>
  )
}

export default ScoreInput;