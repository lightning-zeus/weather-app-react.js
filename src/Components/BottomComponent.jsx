import React from "react";
import WeatherCard from "./WeatherCard";

class BottomComponent extends React.Component {
  render() {
    const weatherForecast = this.props.weatherForecast;
    
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
        <WeatherCard
          icon={weatherForecast[1].weather[0].icon}
          tempmax={weatherForecast[1].temp.max}
          tempmin={weatherForecast[1].temp.min}
        />
        <WeatherCard
          icon={weatherForecast[2].weather[0].icon}
          tempmax={weatherForecast[2].temp.max}
          tempmin={weatherForecast[2].temp.min}
        />
        <WeatherCard
          icon={weatherForecast[3].weather[0].icon}
          tempmax={weatherForecast[3].temp.max}
          tempmin={weatherForecast[3].temp.min}
        />
        <WeatherCard
          icon={weatherForecast[4].weather[0].icon}
          tempmax={weatherForecast[4].temp.max}
          tempmin={weatherForecast[4].temp.min}
        />
        <WeatherCard
          icon={weatherForecast[5].weather[0].icon}
          tempmax={weatherForecast[5].temp.max}
          tempmin={weatherForecast[5].temp.min}
        />
      </div>
    );
  }
}

export default BottomComponent;
