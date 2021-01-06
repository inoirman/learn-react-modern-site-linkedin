import React from "react";
import "./App.css";
import ToDoList from "./todos/ToDoList";
import NewTodoForm from "./todos/NewTodoForm";

const App = () => (
  <div className="App">
    <NewTodoForm />
    <ToDoList />
  </div>
);

export default App;
