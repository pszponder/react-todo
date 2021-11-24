import React from "react";
import "./Header.styles.css";

export default function Header(props) {
  return (
    <div>
      <h1 className="ui header center aligned">React ToDo App</h1>
      <nav class="ui secondary pointing menu">
        <a class="item active">All</a>
        <a class="item">Completed</a>
        <a class="item">Top 3</a>
      </nav>
    </div>
  );
}
