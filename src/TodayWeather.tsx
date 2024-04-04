// import AirConditions from "./AirConditions/AirConditions";
// import DailyForecast from "./Forecast/DailyForecast";
import { Container } from "react-bootstrap";
import Details from "./TodayWeather/Details/CurrentWeather";
import AirConditions from "./TodayWeather/Details/AirConditions";

const TodayWeather = ({
  data,
  // forecastList
}) => {
  console.log(data);
  return (
    <Container>
      <Details data={data} />
      <AirConditions data={data} />
      {/* <DailyForecast data={data} forecastList={forecastList} /> */}
    </Container>
  );
};

export default TodayWeather;
