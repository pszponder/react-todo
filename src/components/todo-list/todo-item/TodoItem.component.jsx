import React from "react";
import "./TodoItem.styles.css";

export default function TodoItem(props) {
  return (
    <div class="todoItem ui segment teal tertiary">
      <h3 class="ui header">Todo Description</h3>
      <div class="ui small basic icon buttons">
        <button class="ui button">
          <i class="exclamation icon"></i>
        </button>
        <button class="ui button">
          <i class="edit icon"></i>
        </button>
        <button class="ui button">
          <i class="delete icon"></i>
        </button>
      </div>
    </div>
  );
}
