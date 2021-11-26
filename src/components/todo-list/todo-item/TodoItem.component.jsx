import React from "react";
import "./TodoItem.styles.css";

export default function TodoItem(props) {
  // Create a ref to the Edit section
  const editRef = React.useRef();

  // Create a ref for the input element
  const inputRef = React.useRef();

  return (
    <div
      className={`ui segment ${props.important ? "teal" : ""} ${
        props.complete ? "tertiary" : ""
      }`}
    >
      {/* EDIT SECTION */}
      <div
        className="editTodo ui action input fluid"
        ref={editRef}
        style={{ display: "none" }}
      >
        <input type="text" placeholder="Enter edited todo..." ref={inputRef} />
        <button
          className="ui button"
          onClick={(event) => {
            props.onEdit(event, props, inputRef.current.value);
            inputRef.current.value = "";
            editRef.current.style.display = "none";
          }}
        >
          Save
        </button>
      </div>

      {/* TITLE AND TOGGLE BUTTONS */}
      <div className="todoItem">
        <h3 className="ui header">{props.title}</h3>
        <div className="ui small basic icon buttons">
          <button
            className="ui button"
            onClick={(event) => props.onImportant(event, props)}
          >
            <i className="exclamation icon"></i>
          </button>
          <button
            className="ui button"
            onClick={() => (editRef.current.style.display = "flex")}
          >
            <i className="edit icon"></i>
          </button>
          <button
            className="ui button"
            onClick={(event) => props.onComplete(event, props)}
          >
            <i className="check icon"></i>
          </button>
          <button
            className="ui button"
            onClick={(event) => props.onDelete(event, props)}
          >
            <i className="delete icon"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
