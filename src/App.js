//import logo from './logo.svg';
import "./App.css";
import React from "react";
import BottomComponent from "./Components/BottomComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import MainCard from './Components/mainCard';
import bgimg3 from "../src/Components/bgimg3.jpg";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgimg3})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto",
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        overflow: "auto",
      }}
    >
      <MainCard />
      <BottomComponent
      />
    </div>
  );
}

export default App;
