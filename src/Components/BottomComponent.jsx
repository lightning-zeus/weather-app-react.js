import React, { Component } from "react";
import WeatherCard from "./WeatherCard";
import { Container, Col, Row, Card } from "react-bootstrap";
import bgimg from "./bgimg.jpg";

class BottomComponent extends React.Component {
  state = {
    items: {},
    weather: {}
  };

  componentDidMount() {
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=cb4d3020367da2edfedc7ab07356eb3f"
    )
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          items: result.main,
          weather: result.weather
         
        }
        );
        console.log(this.state);
      });

    
  }
  

  icondecider = function () {
    const { icon } = this.state.weather;

  };

  render() {
    return (
      <div>
        <Container
          fluid
          style={{
            backgroundImage: `url(${bgimg})`,
          }}
        >
          <Row className="justify-content-md-center">
            <Col
              md="auto"
              // style={{
              //   margin: "0rem 3.5rem",
              // }}
            >
              <WeatherCard
                max_temp={this.state.items.temp_max}
                min_temp={this.state.items.temp_min}
                
              />
            </Col>
            <Col md="auto">
              <WeatherCard
                max_temp={this.state.items.temp_max}
                min_temp={this.state.items.temp_min}
              />
            </Col>
            <Col md="auto">
              <WeatherCard
                max_temp={this.state.items.temp_max}
                min_temp={this.state.items.temp_min}
              />
            </Col>
            <Col md="auto">
              <WeatherCard
                max_temp={this.state.items.temp_max}
                min_temp={this.state.items.temp_min}
              />
            </Col>
            <Col md="auto">
              <WeatherCard
                max_temp={this.state.items.temp_max}
                min_temp={this.state.items.temp_min}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default BottomComponent;
