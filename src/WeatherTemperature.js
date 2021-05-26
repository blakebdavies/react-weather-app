import React from "react";

export default function WeatherTemperature(props){
    
    function displayCelsius(event){
        event.preventDefault();
        props.setUnit("celsius");
    }

     function displayFahrenheit(event){
    event.preventDefault();
    props.setUnit("fahrenheit");
    }

    

    if(props.unit === `celsius`){
 return(
        <div className="WeatherTemperature">
            <span className="temperature">{Math.round(props.celsius)}</span>
            <span className="unit">°C | <a href="/" onClick={displayFahrenheit}>°F</a></span>
        </div>
    );
    } else{
    let fahrenheit =(props.celsius * 9)/5 +32;
        return(<div className="WeatherTemperature">
            <span className="temperature">{Math.round(fahrenheit)}</span>
            <span className="unit" onClick={displayCelsius}><a href="/">°C </a> | °F</span>
        </div>
        );
    }
   
}