import React from "react";
import "./TodoItem.styles.css";

export default function TodoItem(props) {
  return (
    <div className="todoItem ui segment teal tertiary">
      <h3 className="ui header">Todo Description</h3>
      <div className="ui small basic icon buttons">
        <button className="ui button">
          <i className="exclamation icon"></i>
        </button>
        <button className="ui button">
          <i className="edit icon"></i>
        </button>
        <button className="ui button">
          <i className="check icon"></i>
        </button>
        <button className="ui button">
          <i className="delete icon"></i>
        </button>
      </div>
    </div>
  );
}
