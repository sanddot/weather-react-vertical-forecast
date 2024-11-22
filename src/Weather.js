import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      humidity: response.data.temperature.humidity,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      feels: response.data.temperature.feels_like,
      imgUrl: response.data.condition.icon_url,
      description: response.data.condition.description,
      date: new Date(response.data.time * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="search-fields">
            <input
              type="search"
              placeholder="Enter a city..."
              autoFocus="on"
              className="form-control"
            />
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </form>
        <p>
          <FormattedDate date={weatherData.date} />
        </p>
        <div className="row">
          <div className="col-8 mt-3">
            <ul>
              <h1>{props.defaultCity}</h1>
              <div className="wrapper">
                <img
                  src={weatherData.imgUrl}
                  alt={weatherData.description}
                  className="current-weather-icon"
                />
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="unit">ºC</span>
              </div>
              <li className="text-capitalize mb-3">
                {" "}
                {weatherData.description}
              </li>
              <li>Feels like: {Math.round(weatherData.feels)}º</li>

              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} m/s</li>
            </ul>
          </div>
          <div className="col-4">
            <div className="foreacast-day">
              <span>Mon </span>
              <span> 🌤️ </span>
              <span> 20º / </span>
              <span> 5º</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "t3f3af9b184481d0306edc82cbo6ff8c";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "loading...";
  }
}
