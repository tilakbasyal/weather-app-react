import React from "react";
import useWeather from "./hooks/useWeather"; // Assuming you have defined the useWeatherData hook

const WeatherComponent: React.FC = () => {
  const { weatherData, loading, error } = useWeather();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!weatherData) {
    return null;
  }

  const { main, weather, wind } = weatherData;
  const { temp, humidity } = main;
  const { speed } = wind;
  const weatherIcon = weather[0].icon;

  return (
    <div>
      <h2>Current Weather</h2>
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${weatherIcon}.png`}
          alt={weather[0].description}
        />
      </div>
      <div>Temperature: {temp}°C</div>
      <div>Humidity: {humidity}%</div>
      <div>Wind Speed: {speed} m/s</div>
    </div>
  );
};

export default WeatherComponent;
