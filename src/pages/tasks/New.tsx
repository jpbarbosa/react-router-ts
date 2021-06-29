import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { TaskForm } from './Form';
import { Task, TaskData } from '../../types/tasks';
import { CREATE_TASK, GET_TASKS } from '../../queries/tasks';

export const TaskNew: React.FC = () => {
  const history = useHistory();

  const [createTask] = useMutation<TaskData>(CREATE_TASK, {
    refetchQueries: [{ query: GET_TASKS }],
  });

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
