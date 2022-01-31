import React, { Component } from "react";
class MainLeftComp extends Component {
  state = {};

  render() {
    const { temp, currentDate, cityName, countryCode } = this.props;
   let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
    const countryName=(regionNames.of(countryCode));

    return (
      <div
        className="card mb-3"
        style={{
          maxWidth: "540px",
          justifyContent: "left",
          display: "flex",
          alignItems: "center",
          backgroundColor: "rgba(245, 245, 245, 0)",
          color: "white",
          margin: "0em 30em 0em -20em",
          fontFamily: "Caveat, cursive",
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
                src={"assets/nRain.svg"}
                alt=""
                style={{
                  margin: "1rem",
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
                <div>MOSTLY SUNNY</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainLeftComp;
