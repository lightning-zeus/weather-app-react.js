import React, { Component } from "react";
import SideCompCards from "./SideCompCards";

class MainRightcomp extends Component {
  state = {};

  constructWeatherObject(tZ) {
    return {
      timeZone: tZ,
    }
  }
  render() {
    const { currentWeather, timeZone } = this.props;
    const { humidity, pressure, feels_like, sunrise, sunset, wind_speed } =
      currentWeather;
    const sunRise = new Date(sunrise * 1000);
    const sunSet = new Date(sunset * 1000);
    const timeZoneObject = this.constructWeatherObject(timeZone);
   
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minWidth: "fit-content",
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
          <SideCompCards
            text={"Sunrise"}
            value={sunRise.toLocaleTimeString("en-IN", timeZoneObject)}
            suffix={""}
          />
          <SideCompCards
            text={"Sunset"}
            value={sunSet.toLocaleTimeString("en-IN", timeZoneObject)}
            suffix={""}
          />
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
