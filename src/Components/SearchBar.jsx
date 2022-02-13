import React, { Component } from "react";
import { Button } from "react-bootstrap";
class SearchBar extends Component {
  state = {
    city: "",
    url: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if(prevState!==this.state)
    console.log(prevState, this.state);
  }

  

  render() {
    return (
      <div
        className="input"
        style={{
          display: "flex",
          flexDirection: "",
          textAlign: "center",
          justifyContent: "right",
          margin: "2em 4em 4em 4em",
        }}
      >
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            style={{ height: "40px", fontWeight: "bold", borderRadius: "10px" }}
            className="inputValue"
            name="cityname"
            ref={(node) => (this.inputNode = node)}
            placeholder="Enter a City"
          ></input>
          <Button
            variant="primary"
            style={{margin:"0px 1rem"}}
            onClick={() => this.props.onEnter(this.inputNode.value)}
          >
            Enter
          </Button>{" "}
        </form>
        <span style={{ color: "white" }}>{this.state.city}</span>
      </div>
    );
  }
}

export default SearchBar;
