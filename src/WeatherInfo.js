import React from "react";
import WeatherTemperature from "./WeatherTemperature";
import "./weatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-8 mt-3">
          <ul>
            <h1>{props.data.city}</h1>
            <div className="wrapper">
              <img
                src={props.data.imgUrl}
                alt={props.data.description}
                className="current-weather-icon"
              />
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
            <li className="text-capitalize mb-3"> {props.data.description}</li>
            <li>
              Feels like: <strong>{Math.round(props.data.feels)}º</strong>
            </li>

            <li>
              Humidity: <strong>{props.data.humidity}%</strong>
            </li>
            <li>
              Wind: <strong>{props.data.wind} m/s</strong>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <div className="weather-forecast">
            <span className="forecast-day">Mon </span>
            <span className="forecast-icon"> 🌤️ </span>
            <span>
              <span className="forecast-max">
                <strong> 20º </strong>
              </span>
              <span className="forecast-min"> 5º</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
