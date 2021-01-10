import React from "react";
import { connect } from "react-redux";
import TodoListItem from "./TodoListItem";
import "./TodoList.css";
import NewTodoForm from "./NewTodoForm";
import { removeTodo } from "./actions";

const ToDoList = ({ todos = [], onRemovePressed }) => (
  <div className="list-wrpper">
    <NewTodoForm />
    {todos.map((todo) => (
      <TodoListItem
        todo={todo}
        key={todo.text}
        onRemovePressed={onRemovePressed}
      />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
