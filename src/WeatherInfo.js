import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1> {props.data.city} </h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />{" "}
        </li>
        <li className="text-capitalize"> {props.data.description} </li>
      </ul>

      <div className="row">
        <div className="col-6 p-3">
          <div>
            <img src={props.data.icon} alt={props.data.description} />
            <span className="temperature"> {props.data.temperature} </span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6 weather-info">
          <ul>
            <li> Humidity: {props.data.humidity} %</li>
            <li> Wind: {props.data.wind} km/h </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
