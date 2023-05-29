import React from "react";
import "./CityWeather.css";

export default function CityWeather() {
  return (
    <div className="col-lg-3">
      <div>
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
          alt="sun"
        />
      </div>
      <div id="description">Clear Sky </div>
    </div>
  );
}
