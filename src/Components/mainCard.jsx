import React, { Component } from "react";
import MainLeftComp from "./MainLeftComp";
import MainRightcomp from "./MainRightcomp";
import SearchBar from "./SearchBar";

class MainCard extends React.Component {


  state = {
    url: "",
  };
  render() {
    const { currentWeather, currentDate, cityName, countryCode } = this.props;
    const { temp } = currentWeather;
   
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
        <MainLeftComp
          temp={temp}
          //icon={icon}
          currentDate={currentDate}
          cityName={cityName}
          countryCode={countryCode}
        />

        <MainRightcomp />
      </div>
    );
  }
  //getCurrentDate() {
  //  let newDate = new Date();
  //  return newDate.toDateString();
  //}
}

export default MainCard;
