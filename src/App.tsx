import { List, ListItem, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoItem from './components/TodoItem';

interface TodoType {
  id: number | string;
  todo: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  return (
    <div className="flex-center">
      <h1>To Do List</h1>
      <h3>{new Date().toString()}</h3>
      <ToDoForm todos={{ todos, setTodos }} />
      <List className="shadow w-full rounded border">
        {todos.length === 0 ? (
          <ListItem dense>
            <Typography variant="h6">No tasks to do yet...</Typography>
          </ListItem>
        ) : (
          todos.map(todo => <ToDoItem todo={todo} />)
        )}
      </List>
    </div>
  );
};

export default App;
