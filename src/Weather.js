import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      description: response.data.condition.description,
      temperature: Math.round(response.data.temperature.current),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.temperature.humidity,
      icon: response.data.condition.icon_url,
      date: new Date(response.data.time * 1000),
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="input-group rounded p-2">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search for a city"
              autoFocus="on"
            />
            <button type="button" className="btn btn-outline-primary">
              search
            </button>
          </div>
        </form>

        <h1> {weatherData.city} </h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />{" "}
          </li>
          <li className="text-capitalize"> {weatherData.description} </li>
        </ul>

        <div className="row">
          <div className="col-6 p-3">
            <div>
              <img src={weatherData.icon} alt={weatherData.description} />
              <span className="temperature"> {weatherData.temperature} </span>
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-6 weather-info">
            <ul>
              <li> Humidity: {weatherData.humidity} %</li>
              <li> Wind: {weatherData.wind} km/h </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let key = "7ef1et3obcaa30b2b586b1bcca3d3f4d";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${key}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading ... ";
  }
}
