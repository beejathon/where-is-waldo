import React, { useEffect, useState } from "react";
import './App.css'
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import Header from "./components/Header";
import Puzzle from "./components/Puzzle";
import Start from "./components/Start";
import Scores from "./components/Scores";
import Footer from "./components/Footer";

const firebaseConfig = {
  apiKey: "AIzaSyAM1ToAPFdJqzdaxuk_nrqmALmYlzRsur4",
  authDomain: "wru-waldo.firebaseapp.com",
  projectId: "wru-waldo",
  storageBucket: "wru-waldo.appspot.com",
  messagingSenderId: "384388119225",
  appId: "1:384388119225:web:42364104139afd6bff3968"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function App() {
  const [gameActive, setGameActive] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [showScores, setShowScores] = useState(false);
  const [isHiScore, setIsHiScore] = useState(false);
  const [gameFinished, setGameFinished] = useState(true);

  const toggleGameActive = () => {
    gameActive ? setGameActive(false) : setGameActive(true);
  }

  const toggleGameFinished = () => {
    gameFinished ? setGameFinished(false) : setGameFinished(true); 
  }

  const toggleScores = (hiScore) => {
    setShowScores(true);
    if (hiScore) setIsHiScore(true);
  }

  const reset = () => {
    setGameActive(false);
    setSeconds(0);
    setShowScores(false);
    setIsHiScore(false);
    setGameFinished(true);
  }

  useEffect(() => {
    let interval = null;
    if (gameActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds +1)
      }, 1000);
    } else if (!gameActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [gameActive, seconds]);

  return (
    <div className="App">
      <Header seconds={seconds} />
      <Puzzle 
        toggleGameActive={toggleGameActive}
        seconds={seconds}
        toggleScores={toggleScores}
        gameFinished={gameFinished}
        toggleGameFinished={toggleGameFinished}
      />
      <Start 
        gameActive={gameActive} 
        toggleGameActive={toggleGameActive}
        showScores={showScores}
        gameFinished={gameFinished}
        toggleGameFinished={toggleGameFinished}
      />
      <Scores
        showScores={showScores}
        isHiScore={isHiScore}
        score={seconds}
        reset={reset}
      />
      <Footer />
      <div className={gameActive ? 'hidden' : 'overlay'} />
  </div>
  );
}

export { App, db };
