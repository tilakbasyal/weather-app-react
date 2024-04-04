import React from "react";
import { Col, Row } from "react-bootstrap";
import { BsThermometer } from "react-icons/bs";
import { BsWind } from "react-icons/bs";

import { getMonthAndDay } from "../../utils/getMonthAndDay";

const Details = ({ data }) => {
  console.log({ data });
  const date = getMonthAndDay(data.dt);
  console.log(date);
  return (
    <React.Fragment>
      <h5 className="common-header" style={{ marginTop: "12px" }}>
        Air Conditions
      </h5>
      <Row>
        <Col>
          <BsThermometer /> <span>Feels Like</span>
          <p style={{ margin: 0 }}>{data.main.feels_like}</p>
        </Col>

        <Col>
          <BsWind /> <span>Wind</span>
          <p style={{ margin: 0 }}>{data.wind.speed}</p>
        </Col>

        <Col>
          <BsWind /> <span>Clouds</span>
          <p style={{ margin: 0 }}>{data.clouds?.all} %</p>
        </Col>

        <Col>
          <BsWind /> <span>Humidity</span>
          <p style={{ margin: 0 }}>{data.main?.humidity} %</p>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Details;
