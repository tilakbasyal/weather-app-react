import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import useUserLocation from "./hooks/useLocation";
import useWeather from "./hooks/useWeather";
import TodayWeather from "./TodayWeather";
import HourlyForcast from "./HourlyForecast";
import useHourlyWeatherData from "./hooks/useHourlyData";
// import WeatherComponent from "./WeatherComponent";

function ContainerExample() {
  // const { location, error } = useUserLocation();
  const { weatherData, loading, error: weatherDataError } = useWeather();
  const {
    hourlyData,
    loading: hourlyDataLoading,
    error: hourlyDataError,
  } = useHourlyWeatherData();

  console.log({
    location,
    weatherData,
    loading,
    weatherDataError,
    hourlyData,
    hourlyDataLoading,
    hourlyDataError,
  });
  return (
    <Container fluid>
      <Row style={{ display: "flex" }}>
        <Col>
          <TodayWeather data={weatherData} />
        </Col>
        <Col>
          <HourlyForcast data={hourlyData} />
        </Col>
        {/* <Col lg={true}>
          <div
            className="logp-and-time-header"
            style={{ display: "flex", alignItems: "center", gap: 12 }}
          >
            <h3>Weather App</h3>
            <span>current Time</span>
          </div>
          <div className="Current Location">
            <p>Current Location: {weatherData.name}</p>
          </div>
          <WeatherComponent />
        </Col> */}
      </Row>
    </Container>
  );
}

export default ContainerExample;
