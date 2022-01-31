import React, { Component } from "react";
import WeatherCard from "./WeatherCard";


class BottomComponent extends React.Component {

  render() {
    const weatherForecast  = this.props.weatherForecast;
    //console.log(weatherForecast);
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
        <WeatherCard tempmax={weatherForecast[1].temp.max} tempmin={weatherForecast[1].temp.min}/>
        <WeatherCard tempmax={weatherForecast[2].temp.max} tempmin={weatherForecast[2].temp.min} />
        <WeatherCard tempmax={weatherForecast[3].temp.max} tempmin={weatherForecast[3].temp.min} />
        <WeatherCard tempmax={weatherForecast[4].temp.max} tempmin={weatherForecast[4].temp.min} />
        <WeatherCard tempmax={weatherForecast[5].temp.max} tempmin={weatherForecast[5].temp.min} />
      </div>
    );
  }
}

export default BottomComponent;
