import React, { useState, useEffect } from "react";
import WeatherTemperature from "./WeatherTemperature";
import "./weatherInfo.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherInfo(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.data.coordinates]);

  function handleResponse(response) {
    console.log(props.data.coordinates);
    setLoaded(true);
    setForecast(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="WeatherInfo">
        <div className="row">
          <div className="col-7 mt-3">
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
              <li className="text-capitalize mb-3">
                {" "}
                {props.data.description}
              </li>
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
          <div className="col-5">
            {forecast.map(function (dailyForecast, index) {
              if (index < 5) {
                return (
                  <div key={index}>
                    <WeatherForecastDay data={dailyForecast} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "t3f3af9b184481d0306edc82cbo6ff8c";
    let longitude = props.data.coordinates.longitude;
    let latitude = props.data.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
