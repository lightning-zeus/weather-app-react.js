import React, { Component } from "react";
import MainCard from "./mainCard";
import BottomComponent from "./BottomComponent";
import bgimg from "./bgimg.jpg";
import SearchBar from "./SearchBar";
class PrimeCard extends Component {
  state = {
    items: {},
    weather: {},
    city: "",
    countryCode: "",
  };

  weatherUpdater = function(lat,lon) {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts&units=metric&appid=cb4d3020367da2edfedc7ab07356eb3f`
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.cod === 200) {
          this.setState({
            items: result.main,
            weather: result.weather,
            city: result.name,
            countryCode: result.sys.country,
          });
          console.log("Then executed");
        }
      })
      .catch((e) => {
        alert("Oops, city not found!!");
        //  this.setState({
        //    items: {},
        //    weather: {},
        //    city: `Kolkata`,
        //    url: `http://api.openweathermap.org/data/2.5/weather?q=kolkata&units=metric&appid=cb4d3020367da2edfedc7ab07356eb3f`,
        //  });
      });
  };
  handleEnter = (city) => {
    console.log("Event Handler clicked");
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=cb4d3020367da2edfedc7ab07356eb3f`
    )
      .then((res) => res.json())
      .then((result) => {
         if (result[0]!==undefined) {
         //console.log((result[0].lat), (result[0].lon));
          this.weatherUpdater((result[0].lat), (result[0].lon));
        }
      });
  };

  componentDidMount() {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=kolkata&units=metric&appid=cb4d3020367da2edfedc7ab07356eb3f`
    )
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          items: result.main,
          weather: result.weather,
          city: result.name,
          countryCode: result.sys.country,
        });
      });
  }

  iconDecider = function () {
    const { icon } = this.state.weather;
  };

  getCurrentDate() {
    let newDate = new Date();
    return newDate.toDateString();
  }

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto",
          display: "flex",
          height: "100vh",
          flexDirection: "column",
          overflow: "auto",
        }}
      >
        <SearchBar
          // style={{ display: "flex", justifyContent: "right" }}
          onEnter={this.handleEnter}
        />
        <MainCard
          temp={this.state.items.temp}
          icon={this.state.weather.icon}
          currentDate={this.getCurrentDate()}
          cityName={this.state.city}
          countryCode={this.state.countryCode}
        />
        <BottomComponent
          weatherinfo={this.state.items}
          iconInfo={this.state.weather}
        />
      </div>
    );
  }
}

export default PrimeCard;
