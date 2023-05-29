import React from "react";
import "./CurrentTemperature.css";

export default function CurrentTemperature() {
  return (
    <div>
      <div className="current-city">
        Berlin
        <span className="updated-time">Last updated: Monday 7:13</span>
      </div>
      <div className="current-temp">
        {" "}
        <strong id="current-temp">19</strong>
        <span className="units"> °C </span>
      </div>
    </div>
  );
}
