import React from "react";
import "./AddTodo.styles.css";

export default function AddTodo(props) {
  return (
    <div className="addTodo ui fluid action input">
      <input type="text" placeholder="Add ToDo..." />
      <button className="ui button">Add</button>
    </div>
  );
}
