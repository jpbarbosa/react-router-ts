import React from 'react';
import { Link, useParams } from 'react-router-dom';

interface IParams {
  id: string;
}

export const TaskEdit: React.FC = () => {
  const { id } = useParams<IParams>();

  return (
    <div className="content">
      <Link className="bt bt-back" to="/tasks">
        Back
      </Link>
      <h2>Edit</h2>
      <div>Task ID: {id}</div>
    </div>
  );
};
