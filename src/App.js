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

  // Initialize a counter state variable
  const [counter, setCounter] = useState(4);

  // Fetch initial ToDo data from external API
  //  add fetched data to the data state variable
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        let tempArray = [];
        for (let i = 0; i < 3; i++) {
          tempArray.push(data[i]);
        }
        setDataArray(tempArray);
      });
  }, []);

  // Add todos to state
  const addTodo = (text) => {
    // Add text from input to
    setDataArray([
      ...dataArray,
      {
        userId: 1,
        id: counter,
        title: text,
        completed: false,
      },
    ]);

    // Update the counter state
    setCounter((prevCounter) => prevCounter + 1);
  };

  // Remove todo from state
  const removeTodo = (todoId) => {
    // Filter out todo with id of todoId
    const filteredTodos = dataArray.filter((todo) => todo.id !== todoId);

    // Update state with filtered list of todos
    setDataArray(filteredTodos);
  };

  return (
    <div className="App ui raised very padded text container segment">
      <DataContext.Provider value={{ dataArray, addTodo, removeTodo }}>
        <Navigation />
        <AddTodo />
        <TodoList />
      </DataContext.Provider>
    </div>
  );
}

export default App;
