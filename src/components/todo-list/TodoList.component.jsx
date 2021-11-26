import React from "react";
import "./TodoList.styles.css";
import TodoItem from "./todo-item/TodoItem.component";
import DataContext from "../../DataContext";

export default function TodoList(props) {
  // set dataContext to reference the DataContext object
  const dataContext = React.useContext(DataContext);

  // Create a handler function to handle deleting of a todo
  function handleDelete(event, props) {
    console.log("Ran handleDelete on: ", event.currentTarget);
    console.log("props", props);
    dataContext.removeTodo(props.id);
  }

  return (
    <div className="ui segments">
      {dataContext.dataArray.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}
