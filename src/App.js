import React from "react";
import WeatherSearch from "./WeatherSearch";
import Footer from "./Footer";
import Forecast from "./Forecast";
import "./App.css";

function App() {
  return (
    <div className="Container">
      <div className="Weather-app">
        <header className="App-header">
          <div className="Weather">
            <h1>
              <WeatherSearch />
            </h1>
            <div className="Current-City">
              <h2>Berlin</h2>

              <li>Last updated: Monday 9 PM</li>
            </div>

            <div className="row">
              <div className="col">
                <div className="clearfix weather-temperature">
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                    alt="sun"
                    class="float-left img-fluid mx-auto"
                  />{" "}
                  <strong>25</strong>
                  <span class="units">
                    <a href=" ">°C</a>|<a href=" ">°F</a>
                  </span>
                </div>
                <br />
                <li>Clear Sky</li>
              </div>

              <div className="col-4">
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
        </header>
      </div>
      <Footer />
    </div>
  );
}

export default App;
