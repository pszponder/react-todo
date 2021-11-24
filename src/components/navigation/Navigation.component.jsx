import React from "react";
import "./Navigation.styles.css";

export default function Navigation(props) {
  return (
    <div>
      <h1 className="ui header center aligned">React ToDo App</h1>
      <nav class="ui secondary pointing menu">
        <a class="item active">All</a>
        <a class="item">Top 3</a>
        <a class="item">Pending</a>
        <a class="item">Done</a>
      </nav>
    </div>
  );
}
