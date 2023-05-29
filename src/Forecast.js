import React from "react";
import "./Forecast.css";

export default function Foreast() {
  return (
    <div>
      <div className="col-lg-2">
        <div>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/rain.png"
            alt="rain"
            class="img-fluid mx-auto text-centrer"
          />
        </div>
        <div className="card-body text-center">
          <h5 class="card-body text-center">Monday</h5>
          <p class="card-text text-center">Rain</p>
        </div>
      </div>

      <div className="col-lg-2">
        <div>
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

      <div className="col-lg-2">
        <div>
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
      <div className="col-lg-2">
        <div>
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

      <div className="col-lg-2">
        <div>
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
  );
}
