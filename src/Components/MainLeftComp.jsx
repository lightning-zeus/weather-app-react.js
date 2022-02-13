import React, { Component } from "react";
import { Card } from "react-bootstrap";

class MainLeftComp extends Component {
  state = {};

  iconDecider(icon) {
    let numPart = icon.substring(0, 2);

    if (numPart === "03" || numPart === "04")
      return "assets/02" + icon.substring(2) + ".svg";

    return "assets/" + icon + ".svg";
  }

  render() {
    const { temp, currentDate, cityName, countryCode, currentFeelsLike, icon } =
      this.props;
    let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
    const countryName = regionNames.of(countryCode);
    const iconPath = this.iconDecider(icon);
    console.log(iconPath);

    return (
      <div>
        <Card
          // className="container"
          style={{
            //maxWidth: "540px",
            justifyContent: "left",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            backgroundColor: "rgba(245, 245, 245, 0)",
            color: "white",
            // margin: "0em 0em 0em -20em",
            fontFamily: "Caveat, cursive",
          }}
        >
          <Card.Body>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "2em 0em",
              }}
            >
              <Card.Title
                style={{
                  fontSize: "3rem",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                {cityName},{countryName}
              </Card.Title>
              <Card.Title
                style={{
                  fontSize: "2rem",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                {currentDate}
              </Card.Title>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  fontFamily: "Caveat, cursive",
                }}
              >
                <Card.Img
                  src={`${iconPath}`}
                  alt=""
                  style={{
                    margin: "1rem 0rem 1rem 1rem",
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
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {currentFeelsLike}
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default MainLeftComp;
