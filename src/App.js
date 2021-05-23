import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="New York"/>
      <footer> This project was coded by Blake Davies, and is
      <a href="https://github.com/blakebdavies/react-weather-app" target="_blank" rel="noreferrer"> open-sourced </a>on GitHub
    </footer>
    </div>
    </div>
  );
}


