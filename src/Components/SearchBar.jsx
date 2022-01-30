import React, { Component } from "react";
class SearchBar extends Component {
  state = {
    city: "",
    url: "",
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState, this.state);
  }

  //handleEnter = (event) => {
  //  event.preventDefault();
  //  this.setState({
  //    city: this.inputNode.value,
  //    url: `http://api.openweathermap.org/data/2.5/weather?q=
  //      ${this.state.city}
  //      &units=metric&appid=cb4d3020367da2edfedc7ab07356eb3f`,
  //  });
  //  console.log(this.state.city);
  //};

  render() {
    return (
      <div
        className="input"
        style={{
          display: "flex",
          flexDirection: "",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <form>
          <input
            type="text"
            style={{ height: "40px", fontWeight: "bold", borderRadius: "10px" }}
            className="inputValue"
            name="cityname"
            ref={(node) => (this.inputNode = node)}
            placeholder="Enter a City"
          ></input>
          <button
            onClick={this.props.onEnter}
            className="btn btn-secondary btn-sm"
          >
            Enter
          </button>
        </form>
        <span style={{ color: "white" }}>{this.state.city}</span>
      </div>
    );
  }
}

export default SearchBar;
