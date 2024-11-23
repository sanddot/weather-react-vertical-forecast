import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./weather.css";
import { Puff } from "react-loader-spinner";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

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
      city: response.data.city,
    });
  }
  function search() {
    let apiKey = "t3f3af9b184481d0306edc82cbo6ff8c";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="search-fields">
            <input
              type="search"
              placeholder="Enter a city..."
              autoFocus="on"
              className="form-control"
              onChange={updateCity}
            />
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </form>
        <p>
          <FormattedDate date={weatherData.date} />
        </p>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();

    return (
      <div className="loader">
        <p>Loading...</p>
        <Puff
          visible={true}
          height="60"
          width="60"
          color="blue"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }
}
