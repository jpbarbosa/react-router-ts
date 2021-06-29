import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { TaskForm } from './Form';

export const TaskNew: React.FC = () => {
  const history = useHistory();

  const handleCreate = () => {
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
