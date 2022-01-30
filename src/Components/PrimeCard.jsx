import React, { Component } from "react";
import MainCard from "./mainCard";
import BottomComponent from "./BottomComponent";
import bgimg from "./bgimg.jpg";
import SearchBar from "./SearchBar";
class PrimeCard extends Component {
  state = {
    items: {},
    weather: {},
  };

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

  componentDidMount() {
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=Kolkata&units=metric&appid=cb4d3020367da2edfedc7ab07356eb3f"
    )
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          items: result.main,
          weather: result.weather,
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
          weatherinfo={this.state.items}
          iconInfo={this.state.weather}
          currentDate={this.getCurrentDate()}
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
