import React from "react";

export default function WeatherForecastDay(props) {
  function highTemperature() {
    let highTemp = Math.round(props.data.temperature.maximum);
    return highTemp;
  }
  function lowTemperature() {
    let lowTemp = Math.round(props.data.temperature.minimum);
    return lowTemp;
  }
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div>
        <span className="forecast-day">{day()} </span>
        <span>
          {" "}
          <img
            className="forecast-icon"
            src={props.data.condition.icon_url}
            alt={props.data.condition.description}
          />{" "}
        </span>
        <span>
          <span className="forecast-max">
            <strong> {highTemperature()}º </strong>
          </span>
          <span className="forecast-min"> {lowTemperature()}º</span>
        </span>
      </div>
    </div>
  );
}
