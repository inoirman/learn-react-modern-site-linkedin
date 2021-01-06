import React from "react";
import TodoListItem from "./TodoListItem";
import "./TodoList.css";

const ToDoList = ({ todos = [{ text: "Hello, World!" }] }) => (
  <div className="list-wrpper">
    {todos.map((todo) => (
      <TodoListItem todo={todo} key={todo} />
    ))}
  </div>
);

export default ToDoList;
