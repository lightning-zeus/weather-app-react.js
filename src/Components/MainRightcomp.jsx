import React, { Component } from "react";
import SideCompCards from "./SideCompCards";

class MainRightcomp extends Component {
  state = {};
  render() {
    const { currentWeather } = this.props;
    const { humidity, pressure, feels_like, sunrise, sunset, wind_speed } =
      currentWeather;
    //console.log(humidity, pressure);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "0em -25em 0em 25em",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "2em 0em",
          }}
        >
          <SideCompCards
            style={{
              padding: "0em 4em",
            }}
            text={"Feels Like"}
            value={feels_like}
            suffix={"°C"}
          />
          <SideCompCards text={"Humidity"} value={humidity} suffix={"%"} />
          <SideCompCards text={"Pressure"} value={pressure} suffix={"HPa"} />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "",
          }}
        >
          <SideCompCards text={"Sunrise"} value={sunrise} suffix={""} />
          <SideCompCards text={"Sunset"} value={sunset} suffix={""} />
          <SideCompCards
            text={"Wind Speed"}
            value={wind_speed}
            suffix={"kmph"}
          />
        </div>
      </div>
    );
  }
}

export default MainRightcomp;
