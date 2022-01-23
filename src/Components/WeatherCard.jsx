import React, { Component } from "react";
import { Card } from "react-bootstrap";


class WeatherCard extends React.Component {

 
  render() {
    const { max_temp, min_temp } = this.props;
    
    return (
      <div >
        <Card
          // border="success"
          style={{
            width: "17rem",
            padding: "1rem 0rem",
            margin: "2em 2em",
            // border: "0px",
            backgroundColor: "rgba(245, 245, 245, 0)",
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
              {Math.trunc(max_temp)} C
            </Card.Title>
            <Card.Title
              style={{
                padding: "1rem 4.5rem",
                color: "wheat",
                fontSize: "2.4rem",
              }}
            >
              {Math.trunc(min_temp)} C
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default WeatherCard;
