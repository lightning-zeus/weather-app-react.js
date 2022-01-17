import React, { Component } from "react";

class MainCard extends React.Component {
  state = {
    currentWeather: "",
    currentTemp: "",
    maxTemp: "",
    minTemp: "",
    pressure: "",
    humidity: "",
    windSpeed: "",
    location: "",
    imageUrls: "https://picsum.photos/200",
  };

  componentDidMount() {
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=Kolkata&units=metric&appid=cb4d3020367da2edfedc7ab07356eb3f"
    )
      .then((res) => {
        console.log("Parsing...", res);
        return res.json();
      })
      .then((data) => {
        console.log("Data Parsed");
        this.setState({
          currentWeather: data.weather.description,
          currentTemp: data.main.temp,
          maxTemp: data.main.temp_max,
          minTemp: data.main.temp_min,
          pressure: data.main.pressure,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          location: data.name,
        });
      })
      .catch((e) => {
        alert("Oops, city not found!!");
      });
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          alignConten: "center",
        }}
      >
        <div className="container-fluid text-center p-1">
          <div className="row">
            <div className="col">
              <div
                className="card"
                style={{
                  backgroundColor: "rgba(245, 245, 245, 0)",
                  color: "white",
                }}
              >
                <h1 className="h4">Wind</h1>
                <h2 className="lead">{this.state.windSpeed} NNW</h2>
                <h1 className="h4">Humidity</h1>
                <h2 className="lead">{this.state.humidity}%</h2>
                <h1 className="h4">Pressure</h1>
                <h2 className="lead">{this.state.pressure} hPa</h2>
              </div>
            </div>

            <div className="col">
              <div
                className="card mb-3"
                style={{
                  maxWidth: "540px",
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "rgba(245, 245, 245, 0)",
                  color: "white",
                }}
              >
                <div className="row no-gutters text-center">
                  <div className="col">
                    <div>{this.getCurrentDate()}</div>
                    <div className="lead mb-1">{this.state.location}</div>
                    <div>
                      <img
                        className="img-fluid rounded"
                        src={this.state.imageUrls}
                        alt=""
                      />
                    </div>
                    <div className="lead mt-2">{this.state.currentWeather}</div>
                    <div className="display-4">
                      {this.state.currentTemp}&#176;C
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card"
                style={{
                  backgroundColor: "rgba(245, 245, 245, 0)",
                  color: "white",
                }}
              >
                <h1 className="h4">Max Temperature</h1>
                <h2 className="lead">{this.state.maxTemp}&#176;C</h2>
                <h1 className="h4">Min Temperature</h1>
                <h2 className="lead">{this.state.minTemp}&#176;C</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  getCurrentDate() {
    let newDate = new Date();
    return newDate.toDateString();
  }
}

export default MainCard;
