import React from "react";
import WeatherSearch from "./WeatherSearch";
import Footer from "./Footer";
import Forecast from "./Forecast";
import "./App.css";

function App() {
  return (
    <div className="Container">
      <div className="App">
        <header className="App-header">
          <div className="Weather">
            <h1>
              <WeatherSearch />
            </h1>
            <div className="Current-City">
              <h2>Berlin</h2>
              //voir ici si je met ul ou 🛳
              <ul className="float-left">
                <li>Last updated: Monday 9 PM</li>
                <li>Clear Sky</li>
              </ul>
            </div>

            <div className="row">
              <div className="col-3">
                <div className="clearfix weather-temperature">
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                    alt="sun"
                    class="float-left img-fluid mx-auto"
                  />
                  <div className="float-left">
                    <strong>25</strong>
                    <span class="units">
                      <a href=" ">°C</a>|<a href=" ">°F</a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <ul>
                  <li>
                    feels like <span>28°C</span>
                  </li>
                  <li>Wind: 14 km/h</li>
                  <li>Humidity: 17%</li>
                </ul>
              </div>
            </div>
            <br />
            <Forecast />
          </div>
          <Footer />
        </header>
      </div>
    </div>
  );
}
