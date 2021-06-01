import React from "react";
import WeatherIcon from "./WeatherIcon";
import LastUpdated from "./LastUpdated";
import FormattedTime from "./FormattedTime";
import WeatherTemperature from "./WeatherTemperature";

import "./WeatherInfo.css"



export default function WeatherInfo(props){
    return(
        <div className="WeatherInfo">
            <div className="last-updated">
            <LastUpdated date={props.data.date}/>
            </div>
            <div className="weather-overview d-block">
                <div className="city-info"> 
            <h1><span className="city">{props.data.city}</span><span className="country d-sm-none d-md-inline">,{props.data.country}</span></h1>
            </div>
            <ul>
                <li>
                 <FormattedTime time={props.data.date} timezone={props.data.timezone}/>
                </li>
            </ul>
            
            <div className="row g-0 mt-3">
                <div className="col-sm-3 col-md-6 p-3">
                    <div className="clearfix">
                        <div className="main-icon float-start">
                        <WeatherIcon code={props.data.icon} size={64}/></div>
                    
                    <div className="float-start">
                        <WeatherTemperature celsius={props.data.temperature} unit={props.unit} setUnit={props.setUnit}/>

                    </div>
                </div>
                </div>
                <div className="current-weather col-sm-3 col-md-6">
                    <ul>
                         <li className="description text-capitalize">
                          {props.data.description}
                        </li>
                        <li>
                            <i className="fas fa-tint"></i> Humidity: {props.data.humidity}%
                        </li>
                        <li>
                            <i className="fas fa-wind"></i> Wind: {Math.round(props.data.wind)} km/h
                        </li>
                    </ul>
                </div>
            </div>
            </div>
    </div>
       
    );
}