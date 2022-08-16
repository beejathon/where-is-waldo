import React, { useState } from "react";
import './App.css'
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import Header from "./components/Header";
import Puzzle from "./components/Puzzle";
import Start from "./components/Start";

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
  const [gameStart, setGameStart] = useState(false);

  const toggleGameStart = () => {
    gameStart ? setGameStart(false) : setGameStart(true); 
  }

  return (
    <div className="App">
      <Header 
        gameStart={gameStart} 
      />
      <Puzzle 
        gameStart={gameStart} 
        toggleGameStart={toggleGameStart}
      />
      <Start 
        gameStart={gameStart} 
        toggleGameStart={toggleGameStart}
      />
      <div className={gameStart ? 'overlay hidden' : 'overlay'} />
    </div>
  );
}

export { App, db };
