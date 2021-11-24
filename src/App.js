import "./App.css";

// Import Components
import Header from "./components/header/Header.component";
import AddTodo from "./components/add-todo/AddTodo.component";
import TodoList from "./components/todo-list/TodoList.component";

function App() {
  return (
    <div className="App ui raised very padded text container segment">
      <Header />
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
