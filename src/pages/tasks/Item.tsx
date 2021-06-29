import React from 'react';
import { Link } from 'react-router-dom';
import { Task } from '../../types/tasks';
import { useTasks } from '../../hooks/useTasks';

interface IProps {
  task: Task;
}

export const TaskItem: React.FC<IProps> = ({ task }) => {
  const { removeTask } = useTasks();

  return (
    <div className="item">
      <Link to={`/tasks/${task.id}/edit`}>{task.name}</Link>
      <button
        className="bt-remove"
        onClick={() => removeTask({ variables: task })}
      >
        X
      </button>
    </div>
  );
};
