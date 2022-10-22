import React, { useLayoutEffect } from "react";
import "./Weather.css";

export default function Weather() {
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

      <h1> Lisbon </h1>
      <ul>
        <li> Sunday 16: 06 </li>
        <li> Mostly cloudy </li>
      </ul>

      <div className="row">
        <div className="col-6 p-3">
          <div>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="mostly cloudy"
            />
            <span className="temperature"> 6</span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6 weather-info">
          <ul>
            <li> Humidity:66 </li>
            <li> Wind: 5 km/h </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
