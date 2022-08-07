import React from "react";
import waldo from './assets/waldo.jpg';
import './App.css'
import { initializeApp } from "firebase/app";
import Menu from "./components/Menu";

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
  return (
    <div className="App">
      <div className="container">
        <img 
          src={waldo} 
          alt=""
          className="waldo"
        />
        <Menu />
      </div>
    </div>
  );
}

export { App, app };
