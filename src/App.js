import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="App-wrapper">
      <Weather defaultCity="New York"/>
      </div>
      <footer> This project was coded by Blake Davies, and is
      <a href="https://github.com/blakebdavies/react-weather-app" target="_blank" rel="noreferrer"> open-sourced on GitHub </a> and <a href="https://gracious-bohr-9bcc0b.netlify.app/" target="_blank" rel="noreferrer">hosted on Netlify</a>
    </footer>
    </div>
    </div>
    
  );
}


