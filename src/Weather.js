import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import Loader from "react-loader-spinner";
import "./Weather.css";
import axios from "axios";

export default function Weather(props){
    const [city, setCity]= useState(props.defaultCity);
    const [weatherData, setWeatherData] = useState({ready : false});
    function handleResponse(response){
        setWeatherData({
            ready: true,
            city: response.data.name, 
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            icon: response.data.weather[0].icon,
            temperature:response.data.main.temp, 
            wind: response.data.wind.speed
            
        });
    }

    function search(){
    const apiKey="ff72838e9031d5bea109425dc6b40694";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function handleCityChange(event){
        setCity(event.target.value);
        
    }

    if (weatherData.ready){
        return(
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                <input 
                type="search" 
                placeholder="Enter a city..." 
                className="form-control" 
                autoFocus="on" 
                onChange={handleCityChange}/>
                </div>
                <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100"/>
            </div>
            </div>
            </form>
            <WeatherInfo data={weatherData}/>
            
</div>
);
    }
    else{
        search();
    return (
    <Loader
        type="Oval"
        color="#1e1e1e"
        height={100}
        width={100}

      />
    );
    };
        
}