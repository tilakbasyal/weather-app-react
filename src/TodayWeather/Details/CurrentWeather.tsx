import { Col, Row } from "react-bootstrap";
import { getMonthAndDay } from "../../utils/getMonthAndDay";
import React from "react";

// current weather
const Details = ({ data }) => {
  const date = getMonthAndDay(data.dt);
  return (
    <React.Fragment>
      <h5 className="common-header">Current Weather</h5>
      <Row>
        <Col lg={6}>
          <h5>{data.name}</h5>
          <p>{date}</p>
        </Col>

        <Col lg={4}>
          <h5>{data.main.temp}</h5>
          <p>{data.weather[0].description}</p>
        </Col>

        <Col lg={2}>
          <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
            alt={data.weather[0].description}
          />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Details;
