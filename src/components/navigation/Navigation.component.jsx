import React from "react";
import "./Navigation.styles.css";
import DataContext from "../../DataContext";

export default function Navigation(props) {
  // Store a local reference to the DataContext
  const dataContext = React.useContext(DataContext);

  return (
    <div>
      <h1 className="ui header center aligned">React ToDo App</h1>
      <nav className="ui secondary pointing menu">
        <button
          onClick={() => dataContext.changeFilter("all")}
          className={`item ${dataContext.filter === "all" ? "active" : ""}`}
        >
          All
        </button>
        <button
          onClick={() => dataContext.changeFilter("important")}
          className={`item ${
            dataContext.filter === "important" ? "active" : ""
          }`}
        >
          Important
        </button>
        <button
          onClick={() => dataContext.changeFilter("pending")}
          className={`item ${dataContext.filter === "pending" ? "active" : ""}`}
        >
          Pending
        </button>
        <button
          onClick={() => dataContext.changeFilter("complete")}
          className={`item ${
            dataContext.filter === "complete" ? "active" : ""
          }`}
        >
          Complete
        </button>
      </nav>
    </div>
  );
}
