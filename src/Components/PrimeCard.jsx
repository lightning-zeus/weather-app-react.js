import React, { Component } from 'react';
import MainCard from './mainCard';
import BottomComponent from './BottomComponent';
import bgimg from './bgimg.jpg'
class PrimeCard extends Component {
    state = {  } 
    render() { 
        return (
          <div
            style={{
              backgroundImage: `url(${bgimg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "auto",
              display: "flex",
              height: "100vh",
              flexDirection: "column",
              overflow: "auto",
            }}
          >
            <MainCard />
            <BottomComponent />
          </div>
        );
    }
}
 
export default PrimeCard;