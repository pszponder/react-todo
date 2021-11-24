import "./App.css";

// Import Components
import Navigation from "./components/navigation/Navigation.component";
import AddTodo from "./components/add-todo/AddTodo.component";
import TodoList from "./components/todo-list/TodoList.component";

function App() {
  return (
    <div className="App ui raised very padded text container segment">
      <Navigation />
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
