import React from "react";
import "./TodoList.styles.css";
import TodoItem from "./todo-item/TodoItem.component";
import DataContext from "../../DataContext";

export default function TodoList(props) {
  // set dataContext to reference the DataContext object
  const dataContext = React.useContext(DataContext);

  return (
    <div className="ui segments">
      {dataContext.dataArray.map((todo) => (
        <TodoItem key={todo.id} title={todo.title} />
      ))}
    </div>
  );
}
