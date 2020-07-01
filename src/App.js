import React from "react";

import "./App.css";
import WeatherEngine from "./components/WeatherEngine";

function App() {
  return (
    <div className="App">
      <WeatherEngine location="Messina" />
      <WeatherEngine location="Catania" />
    </div>
  );
}

export default App;
