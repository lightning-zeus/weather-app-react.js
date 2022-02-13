import React, { Component } from "react";
class MainLeftComp extends Component {
  state = {};

  iconDecider(icon) {
    let numPart = icon.substring(0, 2);

    if (numPart === "03" || numPart === "04")
      return "assets/02" + icon.substring(2) + ".svg";

    return "assets/" + icon + ".svg";
  }

  render() {
    const { temp, currentDate, cityName, countryCode, currentFeelsLike,icon } =
      this.props;
    let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
    const countryName = regionNames.of(countryCode);
    const iconPath = this.iconDecider(icon);
    console.log(iconPath);

    return (
      <div
        
        style={{
          maxWidth: "540px",
          justifyContent: "left",
          display: "flex",
          alignItems: "center",
          backgroundColor: "rgba(245, 245, 245, 0)",
          color: "white",
          margin: "0em 30em 0em -20em",
          fontFamily: "Caveat, cursive",
          //flexWrap: "wrap",
        }}
      >
        <div className="row no-gutters text-center">
          <div className="col">
            <div
              style={{
                fontSize: "3rem",
              }}
            >
              {cityName},{countryName}
            </div>
            <div
              style={{
                fontSize: "2rem",
              }}
            >
              {currentDate}
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: "Caveat, cursive",
              }}
            >
              <img
                className="img-fluid rounded"
                src={`${iconPath}`}
                alt=""
                style={{
                  margin: "1rem 0rem 1rem 4rem",
                  height: "8rem",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "2em 2em",
                  fontFamily: "Caveat, cursive",
                }}
              >
                <div className="display-3">{Math.trunc(temp)}°C</div>
                <div
                  style={{
                    fontSize: "2rem",
                  }}
                >
                  {currentFeelsLike}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainLeftComp;
