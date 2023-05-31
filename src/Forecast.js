import React from "react";
import "./Forecast.css";

export default function Foreast() {
  return (
    <div>
      <div className="col-3">
        <div className="card-body-text">
          <h5 className="card-body ">Monday</h5>
          <p className="card-text">
            Rain <br />
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/rain.png"
              alt="rain"
              className="img-fluid mx-auto text-centrer"
            />
          </p>
        </div>
      </div>

      <div className="col-3">
        <div className="card-body-text">
          <h5 className="card-body ">Tuesday</h5>
          <p className="card-text ">
            Sunny <br />{" "}
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="sun"
              className="img-fluid mx-auto text-centrer"
            />
          </p>
        </div>
      </div>

      <div className="col-3">
        <div className="card-body-text">
          <h5 className="card-body ">Wednesday</h5>
          <p className="card-text ">
            Cloudy <br />{" "}
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="Cloud"
              className="img-fluid mx-auto text-centrer"
            />
          </p>
        </div>
      </div>

      <div className="col-3">
        <div className="card-body-text">
          <h5 className="card-body ">Thursday</h5>
          <p className="card-text ">
            Thunderstorm <br />{" "}
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/thunderstorms.png"
              alt="thunder"
              className="img-fluid mx-auto text-centrer"
            />
          </p>
        </div>
      </div>

      <div className="col-3">
        <div className="card-body-text">
          <h5 className="card-body ">Friday</h5>
          <p className="card-text ">
            snow <br />{" "}
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/snow.png"
              alt="snow"
              className="img-fluid mx-auto text-centrer"
            />
          </p>
        </div>
      </div>
    </div>
  );
}
