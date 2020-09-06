import React from "react";

export default function Navbar(props) {
  return (
    <div className="navbar">
      <span>Search Character: </span>
      <input
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        className="searchbar"
      />
    </div>
  );
}
