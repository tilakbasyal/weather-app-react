import { BsThermometer } from "react-icons/bs";
import { BsWind } from "react-icons/bs";
import { BsDropletHalf } from "react-icons/bs";
import { BsCloudsFill } from "react-icons/bs";

import { Card, ListGroup } from "react-bootstrap";
import { getTime } from "./utils/getMonthAndDay";

const twentyFourHoursFromNow = Date.now() + 24 * 60 * 60 * 1000;

// current weather
const HourlyForcast = ({ data }) => {
  console.log({ houtlyData: data });
  // const date = getTime(data.dt);
  //   console.log("Hourly:", date);
  return (
    <div>
      <h4>3 Hourly Forecast</h4>
      <Card>
        {data?.list.map((i) => {
          if (i.dt * 1000 < twentyFourHoursFromNow) {
            return (
              <Card.Body key={i.dt}>
                {getTime(i.dt)}
                <span style={{ marginLeft: 12 }}>
                  {i?.weather[0].description}
                </span>
                <ListGroup horizontal>
                  <ListGroup.Item>
                    <BsThermometer /> {i?.main.feels_like} °C
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <BsWind /> {i?.wind.speed} m/s
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <BsDropletHalf /> {i?.main.humidity} %
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <BsCloudsFill /> {i?.clouds.all} %
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            );
          }
        })}
      </Card>
    </div>
  );
};

export default HourlyForcast;
