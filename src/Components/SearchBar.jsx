import React, { Component } from "react";
function SearchBar() {
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
      <input
        type="text"
        style={{ height: "40px", fontWeight: "bold", borderRadius: "10px" }}
        className="inputValue"
        placeholder="Enter a City"
      ></input>
      <input type="submit" value="Submit"></input>
    </div>
  );
}
export default SearchBar;
