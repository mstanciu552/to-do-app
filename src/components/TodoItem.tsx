import { ListItem, Typography } from '@material-ui/core';
import React, { useState } from 'react';

interface Props {
  todo: {
    id: number | string;
    todo: string;
    completed: boolean;
  };
}

const ToDoItem: React.FC<Props> = ({ todo }) => {
  const [completed, setCompleted] = useState(todo.completed);

  const changeStatus: (status: boolean) => void = status => {
    setCompleted(!completed);
  };
  return (
    <ListItem
      key={todo.id}
      dense
      className={`w-full flex-around ${
        !completed ? 'bg-red text-white' : 'bg-green'
      }`}
    >
      <Typography
        className={`w-1  ${completed ? 'strike' : undefined}`}
        variant="h6"
      >
        {todo.id}
      </Typography>
      <Typography
        className={`w-2 ${completed ? 'strike' : undefined}`}
        variant="h6"
      >
        {todo.todo}
      </Typography>
      <input
        onChange={() => changeStatus(todo.completed)}
        type="checkbox"
        name="check"
        id="check"
      />
    </ListItem>
  );
};

export default ToDoItem;
