import { useEffect, useState } from "react";
import useLocation from "./useLocation";

const useHourlyWeatherData = () => {
  const { location, error } = useLocation();
  const [hourlyData, setHourlyData] = useState<unknown>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (location) {
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${
              location.latitude
            }&lon=${location.longitude}&appid=${
              import.meta.env.VITE_API_KEY
            }&units=metric`
          );
          const data = await response.json();
          setHourlyData(data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      }
    };

    fetchData();

    // Clean up
    return () => {
      setHourlyData(null);
      setLoading(true);
    };
  }, [location]); // Re-fetch data whenever location changes

  return { hourlyData, loading, error };
};

export default useHourlyWeatherData;
