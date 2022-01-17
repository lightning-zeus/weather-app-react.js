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
              <div className="card"
               style={{backgroundColor: "rgba(245, 245, 245, 0)",}}>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item h4">Wind</li>
                  <li className="list-group-item lead">
                    {this.state.windSpeed} NNW
                  </li>
                  <li className="list-group-item h4">Humidity</li>
                  <li className="list-group-item lead">
                    {this.state.humidity}%
                  </li>
                  <li className="list-group-item h4">Pressure</li>
                  <li className="list-group-item lead">
                    {this.state.pressure} hPa
                  </li>
                </ul>
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
              <div className="card">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item h4">Max Temperature</li>
                  <li className="list-group-item lead">
                    {this.state.maxTemp}&#176;C
                  </li>
                  <li className="list-group-item h4">Min Temperature</li>
                  <li className="list-group-item lead">
                    {this.state.minTemp}&#176;C
                  </li>
                </ul>
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
