import React, { useState, useEffect } from "react";
import "./App.css";

// Import DataContext
import DataContext from "./DataContext";

// Import Components
import Navigation from "./components/navigation/Navigation.component";
import AddTodo from "./components/add-todo/AddTodo.component";
import TodoList from "./components/todo-list/TodoList.component";

function App() {
  // Initialize a dataArray State Variable to hold todo data
  const [dataArray, setDataArray] = useState([]);

  // Fetch initial ToDo data from external API
  //  add fetched data to the data state variable
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        let tempArray = [];
        for (let i = 0; i < 5; i++) {
          tempArray.push(data[i]);
        }
        setDataArray(tempArray);
      });
  }, []);

  return (
    <div className="App ui raised very padded text container segment">
      <DataContext.Provider value={{ dataArray }}>
        <Navigation />
        <AddTodo />
        <TodoList />
      </DataContext.Provider>
    </div>
  );
}

export default App;
