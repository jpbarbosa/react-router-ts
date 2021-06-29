import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { TaskForm } from './Form';

interface IParams {
  id: string;
}

export const TaskEdit: React.FC = () => {
  const { id } = useParams<IParams>();
  const history = useHistory();

  const handleUpdate = () => {
    history.push('/tasks');
  };

  return (
    <div className="content">
      <Link className="bt bt-back" to="/tasks">
        Back
      </Link>
      <h2>Edit</h2>
      <TaskForm activeRecord={{ name: id }} submitAction={handleUpdate} />
    </div>
  );
};
