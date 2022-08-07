import React, { useEffect, useState } from "react";
import waldo from './assets/waldo.jpg';
import './App.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAM1ToAPFdJqzdaxuk_nrqmALmYlzRsur4",
  authDomain: "wru-waldo.firebaseapp.com",
  projectId: "wru-waldo",
  storageBucket: "wru-waldo.appspot.com",
  messagingSenderId: "384388119225",
  appId: "1:384388119225:web:42364104139afd6bff3968"
};

const app = initializeApp(firebaseConfig);

function App() {
  const [click, setClick] = useState({x: 0, y: 0})
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;
    
    setClick({x: x, y: y});
    setShow(true);
  }

  useEffect(() => {
    console.log(click);
  }, [click])
  
  

  return (
    <div className="App">
      <div className="container">
        <img 
          src={waldo} 
          alt=""
          onMouseDown={(e) => handleClick(e)}
          className="waldo-img"
        />
      </div>
    </div>
  );
}

export default App;
