import React from "react";
import { Col, Row } from "react-bootstrap";
import { BsThermometer } from "react-icons/bs";
import { BsWind } from "react-icons/bs";
import { BsCloudsFill } from "react-icons/bs";
import { BsDropletHalf } from "react-icons/bs";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Details = ({ data }) => {
  return (
    <React.Fragment>
      <h5 className="common-header" style={{ marginTop: "12px" }}>
        Air Conditions
      </h5>
      <Row>
        <Col>
          <BsThermometer /> <span>Feels Like</span>
          <p>{data.main.feels_like}</p>
        </Col>

        <Col>
          <BsWind /> <span>Wind</span>
          <p>{data.wind.speed}</p>
        </Col>

        <Col>
          <BsCloudsFill /> <span>Clouds</span>
          <p>{data.clouds?.all} %</p>
        </Col>

        <Col>
          <BsDropletHalf /> <span>Humidity</span>
          <p>{data.main?.humidity} %</p>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Details;
