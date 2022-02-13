import React, { Component } from "react";
import "../";
class SideCompCards extends Component {
  state = {};
  render() {
    
    const { text, value, suffix } = this.props;
    return (
      <div
        style={{
          color: "white",
          fontFamily: "Caveat, cursive",
          paddingRight: "5rem",
          minWidth :"fit-content"
        }}
      >
        <div
          style={{
            fontSize: "3rem",
          }}
        >
          {text}
        </div>
        <div
          style={{
            fontSize: "2rem",
          }}
        >
          {value} {suffix}
        </div>
      </div>
    );
  }
}

export default SideCompCards;
