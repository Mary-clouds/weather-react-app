import React from "react";
import WeatherSearch from "./WeatherSearch";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Your React Weatherapp</h1>
        <h2>
          <WeatherSearch />
        </h2>
      </header>
      <h3>Paris</h3>
    </div>
  );
}

export default App;
