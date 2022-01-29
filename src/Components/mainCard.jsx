import React, { Component } from "react";
import MainLeftComp from "./MainLeftComp";
import MainRightcomp from "./MainRightcomp";
import SearchBar from "./SearchBar";

class MainCard extends React.Component {
  //state = {
  //  currentWeather: "",
  //  currentTemp: "",
  //  maxTemp: "",
  //  minTemp: "",
  //  pressure: "",
  //  humidity: "",
  //  windSpeed: "",
  //  location: "",
  //  imageUrls: "",
  //};
  //
  //componentDidMount() {
  //  fetch(
  //    "http://api.openweathermap.org/data/2.5/weather?q=Kolkata&units=metric&appid=cb4d3020367da2edfedc7ab07356eb3f"
  //  )
  //    .then((res) => {
  //      console.log("Parsing...", res);
  //      return res.json();
  //    })
  //    .then((data) => {
  //      console.log("Data Parsed");
  //      this.setState({
  //        currentWeather: data.weather.description,
  //        currentTemp: data.main.temp,
  //        maxTemp: data.main.temp_max,
  //        minTemp: data.main.temp_min,
  //        pressure: data.main.pressure,
  //        humidity: data.main.humidity,
  //        windSpeed: data.wind.speed,
  //        location: data.name,
  //      });
  //    })
  //    .catch((e) => {
  //      alert("Oops, city not found!!");
  //    });
  //}
  render() {
    const { temp } = this.props.weatherinfo;
    const { main } = this.props.iconInfo; //not working
    console.log(temp, main);
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
          flex: "row",
          flexWrap: "wrap",
        }}
      >
        {/* <div style={{
          color: "white",
          textAlign: "left",
        }}>
          <h1>Kolkata , India</h1>
          <h4>Monday ,  23rd January</h4>
        </div> */}
        <MainLeftComp curTemp={temp} curWeather={main} />
        <SearchBar />
        <MainRightcomp />
      </div>
    );
  }
  getCurrentDate() {
    let newDate = new Date();
    return newDate.toDateString();
  }
}

export default MainCard;
