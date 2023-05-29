import React from "react";
import "./WeatherSearch.css";

export default function WeatherSearch() {
  return (
    <div className="col-6">
      <form id="search-form">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            id="city-input"
            placeholder="Enter a Cityname here..."
            aria-label="Enter a Cityname here..."
            aria-describedby="basic-addon2"
          />
        </div>
      </form>
    </div>
  );
}
