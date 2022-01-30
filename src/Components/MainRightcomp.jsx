import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SideCompCards from "./SideCompCards";

function MainRightcomp() {
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
        />
        <SideCompCards />
        <SideCompCards />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "",
        }}
      >
        <SideCompCards />
        <SideCompCards />
        <SideCompCards />
      </div>
    </div>
  );
}

export default MainRightcomp;
