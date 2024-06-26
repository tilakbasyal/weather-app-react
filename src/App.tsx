import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import useWeather from "./hooks/useWeather";
import TodayWeather from "./TodayWeather";
import HourlyForcast from "./HourlyForecast";
import useHourlyWeatherData from "./hooks/useHourlyData";
import useUserLocation from "./hooks/useLocation";

function ContainerExample() {
  const { weatherData, loading, error: weatherDataError } = useWeather();
  const {
    hourlyData,
    loading: hourlyDataLoading,
    error: hourlyDataError,
  } = useHourlyWeatherData();

  const { error } = useUserLocation();

  if (error) {
    return <p style={{ textAlign: "center" }}>{error}</p>;
  }

  return (
    <Container>
      <Row>
        <Col lg={6} xs={12}>
          <TodayWeather
            data={weatherData}
            loading={loading}
            error={weatherDataError}
          />
        </Col>
        <Col lg={6} xs={12}>
          <HourlyForcast
            data={hourlyData}
            loading={hourlyDataLoading}
            error={hourlyDataError}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerExample;
