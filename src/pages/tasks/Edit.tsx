import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Task, SingleTaskData } from '../../types/tasks';
import { TaskForm } from './Form';
import { useTasks } from '../../hooks/useTasks';
import { GET_TASK } from '../../queries/tasks';

interface IParams {
  id: string;
}

export const TaskEdit: React.FC = () => {
  const { id } = useParams<IParams>();
  const history = useHistory();

  const { loading, data, error } = useQuery<SingleTaskData>(GET_TASK, {
    variables: { id },
  });

  const { updateTask } = useTasks();

  const handleUpdate = (task: Task) => {
    updateTask({ variables: task });
    history.push('/tasks');
  };

  if (loading) return <div className="loading">Loading</div>;
  if (error) {
    return <div className="error">{JSON.stringify(error, null, 2)}</div>;
  }
  if (!data) return <div className="notfound">Not Found</div>;

  return (
    <div className="content">
      <Link className="bt bt-back" to="/tasks">
        Back
      </Link>
      <h2>Edit</h2>
      <TaskForm activeRecord={data.task} submitAction={handleUpdate} />
    </div>
  );
};
