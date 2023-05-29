import React from "react";
import WeatherSearch from "./WeatherSearch";
import Footer from "./Footer";
import CityWeather from "./CityWeather";
import "./App.css";

function App() {
  return (
    <div className="weatherApp">
      <div className="container">
        <div className="row">
          <WeatherSearch />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
