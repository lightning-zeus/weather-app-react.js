import React from 'react';
import "../"
import { Card, Button } from 'react-bootstrap';
function SideCompCards() {
    return (
      <div
        style={{
          color: "white",
          fontFamily: "Caveat, cursive",
          paddingRight: "5rem"
        }}
      >
        <div
          style={{
            fontSize: "3rem",
          }}
        >
          23°
        </div>
        <div
          style={{
            fontSize: "2rem",
          }}
        >
          Temp
        </div>
      </div>
    );
}

export default SideCompCards;
