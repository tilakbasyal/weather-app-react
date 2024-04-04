import { Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

import Details from "./TodayWeather/Details/CurrentWeather";
import AirConditions from "./TodayWeather/Details/AirConditions";
import ErrorComponent from "./ErrorComponent";
import { IComponentProps } from "./types";

const TodayWeather: React.FC<IComponentProps> = ({ data, loading, error }) => {
  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <ErrorComponent />;
  }
  return (
    <Container>
      <Details data={data} />
      <AirConditions data={data} />
    </Container>
  );
};

export default TodayWeather;
