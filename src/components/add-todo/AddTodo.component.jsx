import React from "react";
import "./AddTodo.styles.css";
import DataContext from "../../DataContext";

export default function AddTodo(props) {
  // set dataContext to reference the DataContext object
  const dataContext = React.useContext(DataContext);

  // Create a ref for the input element
  const inputRef = React.useRef();

  return (
    <div className="addTodo ui fluid action input">
      <input type="text" placeholder="Add ToDo..." ref={inputRef} />
      <button
        className="ui button"
        onClick={() => {
          dataContext.addTodo(inputRef.current.value);
          inputRef.current.value = "";
        }}
      >
        Add
      </button>
    </div>
  );
}
