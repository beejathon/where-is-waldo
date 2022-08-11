import React from "react";
import './App.css'
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import Header from "./components/Header";
import Puzzle from "./components/Puzzle";

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
  return (
    <div className="App">
      <Header />
      <Puzzle />
    </div>
  );
}

export { App, db };
