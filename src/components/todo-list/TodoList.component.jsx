import React from "react";
import "./TodoList.styles.css";
import TodoItem from "./todo-item/TodoItem.component";

export default function TodoList(props) {
  return (
    <div>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}
