import React from "react";
import "./Navigation.styles.css";

export default function Navigation(props) {
  return (
    <div>
      <h1 className="ui header center aligned">React ToDo App</h1>
      <nav className="ui secondary pointing menu">
        <button className="item active">All</button>
        <button className="item">Top 3</button>
        <button className="item">Pending</button>
        <button className="item">Done</button>
      </nav>
    </div>
  );
}
