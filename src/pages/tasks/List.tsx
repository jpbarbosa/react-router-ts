import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { TaskData } from '../../types/tasks';
import { GET_TASKS } from '../../queries/tasks';

export const TaskList: React.FC = () => {
  const { loading, data, error } = useQuery<TaskData>(GET_TASKS);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) {
    return (
      <div className="error">
        <div>{error.message}</div>
        <pre>{JSON.stringify(error.networkError, null, 2)}</pre>
      </div>
    );
  }

  return (
    <div>
      <div className="content">
        <Link to="/tasks/new" className="bt bt-new">
          New
        </Link>
      </div>
      <div className="list">
        <ul>
          {data?.tasks.map((task) => (
            <li key={task.id}>
              <Link to={`/tasks/${task.id}/edit`}>{task.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
