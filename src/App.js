//import logo from './logo.svg';
import "./App.css";
import React from "react";
import BottomComponent from "./Components/BottomComponent";
//import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import MainCard from './Components/mainCard';

function App() {
  return (
    <div >
      <MainCard/>
      <BottomComponent />
    </div>
  );
}

export default App;
