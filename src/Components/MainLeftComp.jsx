import React from "react";
function MainLeftComp() {
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
        margin: "0em 10em 0em 0em",
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
            Kolkata, INDIA
          </div>
          <div
            style={{
              fontSize: "2rem",
            }}
          >
            23rd January
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
              <div className="display-3">23°</div>
              <div>MOSTLY SUNNY</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLeftComp;
