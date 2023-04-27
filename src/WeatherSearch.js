import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  const [city, setCity] = useState(" ");
  const [loaded, setLoaded] = useState(false);
  const [temperature, setTemperature] = useState({});

  function showWeather(response) {
    setLoaded(true);
    setTemperature({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function getSubmit(event) {
    event.preventDefault();
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = ` https://api.openweathermap.org/data/2.5/wetger?q=${city}appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let submit = (
    <form onSubmit={getSubmit}>
      <input type="search" placeholder="Enter a city" onChange={updateCity} />
      <button type="submit">Search</button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {submit}
        <ul>
          <li> Temperature:{Math.round(temperature.temperature)}°C</li>
          <li> Description:{temperature.description}</li>
          <li> humidity:{temperature.humidity}%</li>
          <li> Wind:{temperature.wind}km/h</li>
          <li>
            {" "}
            <img src={temperature.icon} alt={temperature.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return submit;
  }
}
