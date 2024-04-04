import { useState, useEffect } from "react";
import useLocation from "./useLocation";
import { IWeatherData } from "../types";

const initialState = {
  name: "",
  main: {
    feels_like: 0,
    humidity: 0,
    pressure: 0,
    temp: 0,
    temp_max: 0,
    temp_min: 0,
  },
  weather: [
    {
      description: "",
      icon: "",
      id: 0,
      main: "",
    },
  ],

  wind: {
    speed: 0,
    deg: 0,
  },
};

const useWeatherData = () => {
  const { location, error } = useLocation();
  const [weatherData, setWeatherData] = useState<IWeatherData>(initialState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (location) {
        try {
          const API_KEY = "6b1bd2e032cb520cf83df5be3fceee75";
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${API_KEY}&units=metric`
          );
          const data = await response.json();
          setWeatherData(data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      }
    };

    fetchData();

    // Clean up
    return () => {
      setWeatherData(initialState);
      setLoading(true);
    };
  }, [location]); // Re-fetch data whenever location changes

  return { weatherData, loading, error };
};

export default useWeatherData;
