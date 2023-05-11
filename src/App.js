import React from "react";
import WeatherSearch from "./WeatherSearch";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Weather">
          <form className="mb-3">
            <WeatherSearch />
          </form>

          <div className="citiesinformations">
            <h1>Berlin</h1>
            <ul className="float-left">
              <li>LAst updated: Monday 7:13</li>
              <li>Sunny</li>
            </ul>
          </div>

          <div className="row">
            <div class="col-6">
              <div class="clearfix weather-temperature">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                  alt="sun"
                  class="float-left img-fluid mx-auto"
                />
                <div class="float-left">
                  <strong>25</strong>
                  <span class="units">
                    <a href=" ">°C</a>|<a href=" ">°F</a>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-6">
              <ul>
                <li>
                  feels like <span>28°C</span>
                </li>
                <li>Wind: 14 km/h</li>
                <li>Humidity: 17%</li>
              </ul>
            </div>
          </div>
          <br>
            <div className="Forecast">
              <div class="row justify-content-center">
                <div class="col">
                  <div class="card h-100" style="width:10rem;">
                    <img
                      src="https://ssl.gstatic.com/onebox/weather/64/rain.png"
                      alt="rain"
                      class="img-fluid mx-auto text-centrer"
                    />
                    <div class="card-body text-center">
                      <h5 class="card-body text-center">Monday</h5>
                      <p class="card-text text-center">Rain</p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card h-100" style="width:10rem;">
                    <img
                      src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                      alt="sun"
                      class="img-fluid mx-auto text-centrer"
                    />
                    <div class="card-body text-center">
                      <h5 class="card-body text-center">Tuesday</h5>
                      <p class="card-text text-center">Sunny</p>
                    </div>
                  </div>
                </div>

                <div class="col">
                  <div class="card h-100" style="width:10rem;">
                    <img
                      src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                      alt="Cloud"
                      class="img-fluid mx-auto text-centrer"
                    />
                    <div class="card-body text-center">
                      <h5 class="card-body text-center">Wednesday</h5>
                      <p class="card-text text-center">Cloudy</p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card h-100" style="width:10rem;">
                    <img
                      src="https://ssl.gstatic.com/onebox/weather/64/thunderstorms.png"
                      alt="thunder"
                      class="img-fluid mx-auto text-centrer"
                    />
                    <div class="card-body text-center">
                      <h5 class="card-body text-center">Thursday</h5>
                      <p class="card-text text-center">Thunderstorm</p>
                    </div>
                  </div>
                </div>

                <div class="col">
                  <div class="card h-100" style="width:10rem;">
                    <img
                      src="https://ssl.gstatic.com/onebox/weather/64/snow.png"
                      alt="snow"
                      class="img-fluid mx-auto text-centrer"
                    />
                    <div class="card-body text-center">
                      <h5 class="card-body text-center">Friday</h5>
                      <p class="card-text text-center">snow</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </br>
          <footer>
            <strong>
              coded by Mary Nevermann
              <a href=" " target="_blank" rel="noopener norefereer">
                open source on Github
              </a>
              <a href=" " target="_blank" rel="noopener norefereer">
                hosted on Netlify
              </a>
            </strong>
          </footer>
        </header>
      </div>
    </div>
  );
}

export default App;
