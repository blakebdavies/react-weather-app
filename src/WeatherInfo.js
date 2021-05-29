import React from "react";
import WeatherIcon from "./WeatherIcon";
import LastUpdated from "./LastUpdated";
import FormattedTime from "./FormattedTime";
import WeatherTemperature from "./WeatherTemperature";



export default function WeatherInfo(props){
    return(
        <div className="WeatherInfo">
            <div className="last-updated">
            <LastUpdated date={props.data.date}/>
            </div>
            <div className="weather-overview">
            <h1 className="city">{props.data.city}</h1>
            <ul>
                <li>
                 <FormattedTime time={props.data.date} timezone={props.data.timezone}/>
                </li>
               
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                        <div className="main-icon float-left">
                        <WeatherIcon code={props.data.icon} size={52}/></div>
                    
                    <div className="float-left">
                        <WeatherTemperature celsius={props.data.temperature} unit={props.unit} setUnit={props.setUnit}/>
                    
                    </div>
                </div>
                </div>
                <div className="col-6">
                    <ul>
                         <li className="description text-capitalize">
                            {props.data.description}
                        </li>
                        <li>
                            Humidity: {props.data.humidity}%
                        </li>
                        <li>
                            Wind: {Math.round(props.data.wind)} km/h
                        </li>
                    </ul>
                </div>
            </div>
            </div>
            </div>
       
    );
}