import React from "react";
import "./TodoList.styles.css";
import TodoItem from "./todo-item/TodoItem.component";
import DataContext from "../../DataContext";

export default function TodoList(props) {
  // set dataContext to reference the DataContext object
  const dataContext = React.useContext(DataContext);

  // Create a handler function to handle deleting of a todo
  function handleDelete(event, props) {
    dataContext.removeTodo(props.id);
  }

  // Create a handler function to handle toggling a todo complete
  function handleToggleComplete(event, props) {
    dataContext.toggleComplete(props.id);
  }

  // Create a handler function to handle toggling a todo as important
  function handleToggleImportant(event, props) {
    dataContext.toggleImportant(props.id);
  }

  // Create a handler function to handle editing of todo task
  function handleEdit(event, props, editText) {
    dataContext.editTodo(props.id, editText);
  }

  // Create a filter function
  function filterTodos(todos, filter) {
    if (filter === "important") {
      return todos.filter((todo) => todo.important);
    } else if (filter === "pending") {
      return todos.filter((todo) => !todo.completed);
    } else if (filter === "complete") {
      return todos.filter((todo) => todo.completed);
    } else {
      return todos;
    }
  }

  return (
    <div className="ui segments">
      {filterTodos(dataContext.dataArray, dataContext.filter).map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          complete={todo.completed}
          important={todo.important ? todo.important : false}
          onDelete={handleDelete}
          onComplete={handleToggleComplete}
          onImportant={handleToggleImportant}
          onEdit={handleEdit}
        />
      ))}
    </div>
  );
}
