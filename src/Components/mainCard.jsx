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

  state = {
    url: "",
  };
  /* 
    Originally this method was in SearchBar; however obtaining the 
    final api call statement through the form input required that the SearchBar
    raise an event and the handleEnter to handle it from MainCard. This method 
    would be passed as a reference to SearchBar via props
  */
  handleEnter = (event) => {
    console.log("Event Handler clicked");
    event.preventDefault();
    this.setState({
      city: this.inputNode.value,
      url: `http://api.openweathermap.org/data/2.5/weather?q= 
        ${this.state.city} 
        &units=metric&appid=cb4d3020367da2edfedc7ab07356eb3f`,
    });
    console.log(this.state.url);
  };

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
        <SearchBar onEnter={this.handleEnter} />
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
