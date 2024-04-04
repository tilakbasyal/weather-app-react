import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import useWeather from "./hooks/useWeather";
import TodayWeather from "./TodayWeather";
import HourlyForcast from "./HourlyForecast";
import useHourlyWeatherData from "./hooks/useHourlyData";

function ContainerExample() {
  const { weatherData, loading, error: weatherDataError } = useWeather();
  const {
    hourlyData,
    loading: hourlyDataLoading,
    error: hourlyDataError,
  } = useHourlyWeatherData();

  return (
    <Container>
      <Row>
        <Col>
          <TodayWeather
            data={weatherData}
            loading={loading}
            error={weatherDataError}
          />
        </Col>
        <Col>
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
