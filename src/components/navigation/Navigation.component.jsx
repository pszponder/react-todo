import React from "react";
import "./Navigation.styles.css";

export default function Navigation(props) {
  return (
    <div>
      <h1 className="ui header center aligned">React ToDo App</h1>
      <nav className="ui secondary pointing menu">
        <a className="item active">All</a>
        <a className="item">Top 3</a>
        <a className="item">Pending</a>
        <a className="item">Done</a>
      </nav>
    </div>
  );
}
