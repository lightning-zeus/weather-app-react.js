import React, { Component } from "react";
import { Card } from "react-bootstrap";

class WeatherCard extends React.Component {
  render() {
    const { tempmax, tempmin } = this.props;
    return (
      <div>
        <Card
          // border="success"
          style={{
            width: "17rem",
            padding: "1rem 0rem",
            margin: "2em 2em",
            border: "0px",
            backgroundColor: "rgba(245, 245, 245, 0.04)",
            opacity: "0.9",
            borderColor: "cyan",
            fontFamily: "Caveat, cursive",
            height: "auto",
          }}
        >
          <Card.Img variant="top" src="assets/10n.svg" height="60px" />
          <Card.Body>
            <Card.Title
              style={{
                padding: "3rem 4.5rem",
                color: "wheat",
                fontSize: "2.4rem",
              }}
            >
              {Math.trunc(tempmin)}°C
            </Card.Title>

            <Card.Title
              style={{
                padding: "1rem 4.5rem",
                color: "wheat",
                fontSize: "2.4rem",
              }}
            >
              {Math.trunc(tempmax)}°C
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default WeatherCard;
