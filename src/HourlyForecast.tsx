import React from "react";
import { Card, Col, Row, Spinner } from "react-bootstrap";

import { BsThermometer } from "react-icons/bs";
import { BsWind } from "react-icons/bs";
import { BsDropletHalf } from "react-icons/bs";
import { BsCloudsFill } from "react-icons/bs";

import { getTime } from "./utils/getMonthAndDay";
import ErrorComponent from "./ErrorComponent";

import { IComponentProps } from "./types";

const twentyFourHoursFromNow = Date.now() + 24 * 60 * 60 * 1000;

const HourlyForcast: React.FC<IComponentProps> = ({ data, loading, error }) => {
  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <ErrorComponent />;
  }
  return (
    <React.Fragment>
      <h5 className="common-header">3 Hourly Forecast</h5>
      <Card style={{ maxHeight: "400px", overflow: "scroll" }}>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        {data?.list.map((i) => {
          if (i.dt * 1000 < twentyFourHoursFromNow) {
            return (
              <Card.Body key={i.dt}>
                {getTime(i.dt)}
                <span
                  style={{ marginLeft: 12, marginBottom: 12, color: "#13a0de" }}
                >
                  {i?.weather[0].description}{" "}
                </span>
                <Row>
                  <Col md={3} style={{ textAlign: "center" }}>
                    <BsThermometer />
                    {Math.round(i?.main.feels_like)} °C
                  </Col>
                  <Col md={3} style={{ textAlign: "center" }}>
                    <BsWind /> {i?.wind.speed} m/s
                  </Col>
                  <Col md={3} style={{ textAlign: "center" }}>
                    <BsDropletHalf /> {i?.main.humidity} %
                  </Col>
                  <Col md={3} style={{ textAlign: "center" }}>
                    <BsCloudsFill /> {i?.clouds.all} %
                  </Col>
                </Row>
              </Card.Body>
            );
          }
        })}
      </Card>
    </React.Fragment>
  );
};

export default HourlyForcast;
