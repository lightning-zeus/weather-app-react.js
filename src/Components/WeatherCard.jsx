import React, { Component } from "react";
import { Card } from "react-bootstrap";

class WeatherCard extends React.Component {
  iconDecider(icon) {
    let numPart = icon.substring(0, 2);

    if (numPart === "03" || numPart === "04")
      return "assets/02" + icon.substring(2) + ".svg";

    return   "assets/" +icon + ".svg";
  }
  render() {
    const { tempmax, tempmin, icon } = this.props;
    const iconPath = this.iconDecider(icon);
    return (
      <div>
        <Card
          className= "container"
          style={{
            width: "17rem",
            padding: "1rem 0rem",
            margin: "2em 2em",
            border: "0px",
            backgroundColor: "rgba(245, 245, 245, 0.05)",
            
            opacity: "0.9",
            borderColor: "cyan",
            fontFamily: "Caveat, cursive",
            height: "auto",
          }}
        >
          <Card.Img variant="top" src={(`${iconPath}`)} height="60px" />
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
