import React from "react";
import WeatherSearch from "./WeatherSearch";
import Footer from "./Footer";
import CityWeather from "./CityWeather";
import CurrentTemperature from "./CurrentTemperature";
import Forecast from "./Forecast";
import "./App.css";

function App() {
  return (
    <div className="weatherApp">
      <div className="container">
        <div className="row">
          <WeatherSearch />
        </div>
        <div className="row">
          <CityWeather />
          <div className="col" id="current-temperature">
            <CurrentTemperature />
          </div>
          <div className="col">
            <ul>
              <li>
                feels like <span>28°C</span>
              </li>
              <li>Wind: 14 km/h</li>
              <li>Humidity: 17%</li>
            </ul>
          </div>
        </div>

        <div className="row">
          <Forecast />
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
