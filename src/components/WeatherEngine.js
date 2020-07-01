import React, { useState, useEffect } from "react";

import WeatherCard from "./WeatherCard/component";

function WeatherEngine({ location }) {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({
    city: null,
    country: null,
    temp: null,
    condition: null,
  });

  const getWeather = async (q) => {
    const apiRes = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=b55015b2db6e3ec16900726fd4f73007`
    );
    const resJSON = await apiRes.json();
    setWeather({
      city: resJSON.name,
      country: resJSON.sys.country,
      temp: resJSON.main.temp,
      condition: resJSON.weather[0].main,
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getWeather(query);
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);

  return (
    <div className="Card">
      <WeatherCard
        temp={weather.temp}
        condition={weather.condition}
        city={weather.city}
        country={weather.country}
      />

      <form className="Form">
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        <button onClick={(e) => handleSearch(e)}>search</button>
      </form>
    </div>
  );
}

export default WeatherEngine;
