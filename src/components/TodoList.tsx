import React from "react";
import { Todo } from "../todo.model";

import classes from "./TodoList.module.css";

interface TodoListProps {
  items: Todo[];
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  const setTodos = props.items.map((todo) => {
    return (
      <li key={todo.id}>
        <span>{todo.text}</span>
        <button type="button" onClick={props.onDeleteTodo.bind(null, todo.id)}>
          DELETE
        </button>
      </li>
    );
  });

  return <ul className={classes.ul}>{setTodos}</ul>;
};

export default TodoList;
