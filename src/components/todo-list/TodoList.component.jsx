import React from "react";
import "./TodoList.styles.css";
import TodoItem from "./todo-item/TodoItem.component";

export default function TodoList(props) {
  return (
    <div className="ui segments">
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}
