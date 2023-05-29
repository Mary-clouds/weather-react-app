import React from "react";
import WeatherSearch from "./WeatherSearch";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Weather">
          <h1>
            <WeatherSearch />
          </h1>

          <div className="Citiesinformations">
            <h2>Berlin</h2>
            <ul className="float-left">
              <li>Last updated: Monday 7:13</li>
              <li>Sunny</li>
            </ul>
          </div>

          <div class="row align-items-center">
            <div class="col-3">
              
               
                <div className="float-left">
                  <strong>25</strong>
                  <span class="units">
                    <a href=" ">°C</a>|<a href=" ">°F</a>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-3">
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
          <div className="Forecast">
            <div className="row ">
              <div className="col">
                <div
                  className="card h-100"
                  style={{ fontSize: "width:10rem;" }}
                >
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/rain.png"
                    alt="rain"
                    class="img-fluid mx-auto text-centrer"
                  />
                  <div className="card-body text-center">
                    <h5 class="card-body text-center">Monday</h5>
                    <p class="card-text text-center">Rain</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="card h-100"
                  style={{ fontSize: "width:10rem;" }}
                >
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                    alt="sun"
                    class="img-fluid mx-auto text-centrer"
                  />
                  <div className="card-body text-center">
                    <h5 class="card-body text-center">Tuesday</h5>
                    <p class="card-text text-center">Sunny</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div
                  className="card h-100"
                  style={{ fontSize: "width:10rem;" }}
                >
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                    alt="Cloud"
                    class="img-fluid mx-auto text-centrer"
                  />
                  <div className="card-body text-center">
                    <h5 class="card-body text-center">Wednesday</h5>
                    <p class="card-text text-center">Cloudy</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="card h-100"
                  style={{ fontSize: "width:10rem;" }}
                >
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/thunderstorms.png"
                    alt="thunder"
                    class="img-fluid mx-auto text-centrer"
                  />
                  <div className="card-body text-center">
                    <h5 class="card-body text-center">Thursday</h5>
                    <p class="card-text text-center">Thunderstorm</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div
                  className="card h-100"
                  style={{ fontSize: "width:10rem;" }}
                >
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/snow.png"
                    alt="snow"
                    class="img-fluid mx-auto text-centrer"
                  />
                  <div className="card-body text-center">
                    <h5 class="card-body text-center">Friday</h5>
                    <p class="card-text text-center">snow</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Footer />
    </div>
  );
}

export default App;
