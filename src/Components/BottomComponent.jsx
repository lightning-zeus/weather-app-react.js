import React, { Component } from "react";
import WeatherCard from "./WeatherCard";
import { Container, Col, Row, Card } from "react-bootstrap";

class BottomComponent extends React.Component {
  // state = {
  //   items: {},
  //   weather: {},
  // };

  // componentDidMount() {
  //   fetch(
  //     "http://api.openweathermap.org/data/2.5/weather?q=Kolkata&units=metric&appid=cb4d3020367da2edfedc7ab07356eb3f"
  //   )
  //     .then((res) => res.json())
  //     .then((result) => {
  //       this.setState({
  //         items: result.main,
  //         weather: result.weather,
  //       });
  //     });
  // }

  render() {
  const { temp_max, temp_min } = this.props.weatherinfo;
    console.log(temp_max, temp_min);
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem 2rem",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <WeatherCard tempmax={temp_max} tempmin={temp_min}/>
        <WeatherCard tempmax={temp_max} tempmin={temp_min} />
        <WeatherCard tempmax={temp_max} tempmin={temp_min} />
        <WeatherCard tempmax={temp_max} tempmin={temp_min} />
        <WeatherCard tempmax={temp_max} tempmin={temp_min} />
      </div>
    );
  }
}

export default BottomComponent;
