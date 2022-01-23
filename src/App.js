//import logo from './logo.svg';
import "./App.css";
import React from "react";
import BottomComponent from "./Components/BottomComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import MainCard from './Components/mainCard';
import { Container, Col, Row, Card } from "react-bootstrap";
import bgimg from "../src/Components/bgimg.jpg";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto",
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        overflow: "auto"
      }}
    >
      <MainCard />
      <BottomComponent />
    </div>
  );
}

export default App;
