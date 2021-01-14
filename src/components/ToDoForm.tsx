import { Button, TextField } from '@material-ui/core';
import React from 'react';

interface Props {
  todos: {
    todos: Array<{}>;
    setTodos: any;
  };
}

const ToDoForm: React.FC<Props> = ({ todos }) => {
  const addTodo: (e: any) => void = e => {
    e.preventDefault();
    const todo = {
      id: e.target.id.value,
      todo: e.target.todo.value,
      completed: false,
    };

    todos.setTodos(todos.todos.concat(todo));

    // e.target.id.value = '';
    // e.target.todo.value = '';
  };

  return (
    <form className="my" onSubmit={addTodo}>
      <TextField type="text" name="id" id="id" placeholder="ID..." />
      <TextField
        type="text"
        name="todo"
        id="todo"
        placeholder="Add new task..."
      />
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default ToDoForm;
