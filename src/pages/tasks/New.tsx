import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { TaskForm } from './Form';
import { Task } from '../../types/tasks';
import { useTasks } from '../../hooks/useTasks';

export const TaskNew: React.FC = () => {
  const history = useHistory();

  const { createTask } = useTasks();

  const handleCreate = (task: Task) => {
    createTask({ variables: task });
    history.push('/tasks');
  };

  return (
    <div className="content">
      <Link className="bt bt-back" to="/tasks">
        Back
      </Link>
      <h2>New</h2>
      <TaskForm activeRecord={{ name: '' }} submitAction={handleCreate} />
    </div>
  );
};
